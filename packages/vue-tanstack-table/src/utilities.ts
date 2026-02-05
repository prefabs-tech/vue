import {
  formatDate as baseFormatDate,
  formatDateTime as baseFormatDateTime,
  getStorage,
} from "@prefabs.tech/vue3-ui";

import { TABLE_STATE_PREFIX } from "./constants";
import { FILTER_FUNCTIONS_ENUM, FILTER_OPERATORS_ENUM } from "./enums";

import type {
  CellAlignmentType,
  CellDataType,
  FormatNumberType,
  PersistentTableState,
  TFilterFn as TFilterFunction,
  TRequestJSON,
  TSortDirection,
} from "./types";
import type { StorageType } from "@prefabs.tech/vue3-ui";
import type {
  ColumnFilter,
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from "@tanstack/vue-table";

const defaultDateOptions: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

const defaultDateTimeOptions: Intl.DateTimeFormatOptions = {
  ...defaultDateOptions,
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
};

export const formatNumber = ({
  value,
  locale = "en-GB",
  formatOptions,
}: FormatNumberType) => {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return value;
  }
  const formatter = new Intl.NumberFormat(locale, formatOptions);

  return formatter.format(value);
};

export const formatDate = (
  date: number | string,
  locale?: string,
  options?: Intl.DateTimeFormatOptions,
) => {
  const dateFormatOptions = options ?? defaultDateOptions;

  return baseFormatDate(date, locale, dateFormatOptions);
};

export const formatDateTime = (
  date: number | string,
  locale?: string,
  options?: Intl.DateTimeFormatOptions,
) => {
  const dateTimeFormatOptions = options ?? defaultDateTimeOptions;

  return baseFormatDateTime(date, locale, dateTimeFormatOptions);
};

const getFilterOperator = (filterFunction: TFilterFunction) => {
  switch (filterFunction) {
    case FILTER_FUNCTIONS_ENUM.CONTAINS: {
      return { operator: FILTER_OPERATORS_ENUM.CONTAINS };
    }
    case FILTER_FUNCTIONS_ENUM.STARTS_WITH: {
      return { operator: FILTER_OPERATORS_ENUM.STARTS_WITH };
    }
    case FILTER_FUNCTIONS_ENUM.ENDS_WITH: {
      return { operator: FILTER_OPERATORS_ENUM.ENDS_WITH };
    }
    case FILTER_FUNCTIONS_ENUM.EQUALS: {
      return { operator: FILTER_OPERATORS_ENUM.EQUALS };
    }
    case FILTER_FUNCTIONS_ENUM.NOT_EQUAL: {
      return { operator: FILTER_OPERATORS_ENUM.EQUALS, not: true };
    }
    case FILTER_FUNCTIONS_ENUM.GREATER_THAN: {
      return { operator: FILTER_OPERATORS_ENUM.GREATER_THAN };
    }
    case FILTER_FUNCTIONS_ENUM.GREATER_THAN_OR_EQUAL: {
      return { operator: FILTER_OPERATORS_ENUM.GREATER_THAN_OR_EQUAL };
    }
    case FILTER_FUNCTIONS_ENUM.LESS_THAN: {
      return { operator: FILTER_OPERATORS_ENUM.LESS_THAN };
    }
    case FILTER_FUNCTIONS_ENUM.LESS_THAN_OR_EQUAL: {
      return { operator: FILTER_OPERATORS_ENUM.LESS_THAN_OR_EQUAL };
    }
    case FILTER_FUNCTIONS_ENUM.IS_NULL: {
      return { operator: FILTER_OPERATORS_ENUM.NULL };
    }
    case FILTER_FUNCTIONS_ENUM.IS_NOT_NULL: {
      return { operator: FILTER_OPERATORS_ENUM.NULL, not: true };
    }
    case FILTER_FUNCTIONS_ENUM.IS_EMPTY: {
      return { operator: FILTER_OPERATORS_ENUM.EMPTY };
    }
    case FILTER_FUNCTIONS_ENUM.IS_NOT_EMPTY: {
      return { operator: FILTER_OPERATORS_ENUM.EMPTY, not: true };
    }
    case FILTER_FUNCTIONS_ENUM.LIKE: {
      return { operator: FILTER_OPERATORS_ENUM.LIKE };
    }
    case FILTER_FUNCTIONS_ENUM.NOT_LIKE: {
      return { operator: FILTER_OPERATORS_ENUM.LIKE, not: true };
    }
    case FILTER_FUNCTIONS_ENUM.IN: {
      return { operator: FILTER_OPERATORS_ENUM.IN };
    }
    case FILTER_FUNCTIONS_ENUM.NOT_IN: {
      return { operator: FILTER_OPERATORS_ENUM.IN, not: true };
    }
    case FILTER_FUNCTIONS_ENUM.BETWEEN: {
      return { operator: FILTER_OPERATORS_ENUM.BETWEEN };
    }
    case FILTER_FUNCTIONS_ENUM.NOT_BETWEEN: {
      return { operator: FILTER_OPERATORS_ENUM.BETWEEN, not: true };
    }

    default: {
      throw new Error(`Unhandled filter function: ${filterFunction}`);
    }
  }
};

const getSortDirection = (desc: boolean): TSortDirection => {
  switch (desc) {
    case false: {
      return "ASC";
    }
    case true: {
      return "DESC";
    }
    default: {
      return "";
    }
  }
};

export const getAlignValue = ({
  align,
  dataType,
}: {
  align?: CellAlignmentType;
  dataType?: CellDataType;
}) => {
  if (align) {
    return align;
  }

  if (dataType == "other") {
    return "center";
  } else if (dataType == "number" || dataType == "currency") {
    return "right";
  } else {
    return "left";
  }
};

const getRangeFilter = (filterState: ColumnFilter) => {
  const values = (filterState.value as string[]).filter((value) =>
    isDefined(value),
  );

  if (values.length === 0) {
    return null;
  }

  if (filterState.filterFn === FILTER_FUNCTIONS_ENUM.BETWEEN) {
    return values.length > 1
      ? {
          key: filterState.id,
          ...getFilterOperator(filterState.filterFn),
          value: values.slice(0, 2).join(","),
        }
      : null;
  }

  if (filterState.filterFn && !isRangeFilter(filterState.filterFn)) {
    return {
      key: filterState.id,
      ...getFilterOperator(filterState.filterFn),
      value: values[0],
    };
  }

  return {
    key: filterState.id,
    ...getFilterOperator(filterState.filterFn || FILTER_FUNCTIONS_ENUM.IN),
    value: values.join(","),
  };
};

export const getRequestJSON = (
  sortingState?: SortingState,
  filterState?: ColumnFiltersState,
  paginationState?: PaginationState,
): TRequestJSON => {
  const getFilter = () => {
    if (!filterState || filterState.length === 0) return null;

    const updatedFilterState = filterState.filter((filter) => {
      if (Array.isArray(filter.value)) {
        const values = filter.value.filter((value) => isDefined(value));

        return values.length > 0;
      }

      if (typeof filter.value === "string") {
        return filter.value.trim() !== "";
      }

      return filter.value != null;
    });

    if (updatedFilterState.length === 0) return null;

    if (updatedFilterState.length === 1) {
      if (Array.isArray(updatedFilterState[0].value)) {
        return getRangeFilter(updatedFilterState[0]);
      }

      return {
        key: updatedFilterState[0].id,
        ...getFilterOperator(
          updatedFilterState[0].filterFn || FILTER_FUNCTIONS_ENUM.CONTAINS,
        ),
        value: String(updatedFilterState[0].value),
      };
    }

    return {
      AND: updatedFilterState.map((filter) => {
        if (Array.isArray(filter.value)) {
          return getRangeFilter(filter);
        }

        return {
          key: filter.id,
          ...getFilterOperator(
            filter.filterFn || FILTER_FUNCTIONS_ENUM.CONTAINS,
          ),
          value: String(filter.value),
        };
      }),
    };
  };

  const getLimit = () => {
    if (
      !paginationState ||
      (paginationState && Object.keys(paginationState).length === 0)
    )
      return null;

    return paginationState.pageSize;
  };

  const getOffset = () => {
    if (
      !paginationState ||
      (paginationState && Object.keys(paginationState).length === 0)
    )
      return null;

    return paginationState.pageIndex * paginationState.pageSize;
  };

  const getSort = () => {
    if (!sortingState || sortingState.length === 0) return null;

    if (sortingState.length > 1) {
      return sortingState.map((state) => ({
        key: state.id,
        direction: getSortDirection(state.desc),
      }));
    }

    return [
      {
        key: sortingState[0].id,
        direction: getSortDirection(sortingState[0].desc),
      },
    ];
  };

  return {
    filter: getFilter(),
    limit: getLimit(),
    sort: getSort(),
    offset: getOffset(),
  };
};

export const getSavedTableState = (
  id: string,
  storage: Storage,
): PersistentTableState | null => {
  try {
    const savedState = storage.getItem(`${TABLE_STATE_PREFIX}-${id}`);

    return savedState && JSON.parse(savedState);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("[Dz table] Could not restore table state", error);
  }

  return null;
};

export const saveTableState = (
  id: string,
  value: PersistentTableState,
  storage: Storage,
) => {
  try {
    storage.setItem(`${TABLE_STATE_PREFIX}-${id}`, JSON.stringify(value));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("[Dz table] Could not store table state", error);
  }
};

export const clearSavedTableStates = (
  storageType: StorageType = "localStorage",
) => {
  const storage = getStorage(storageType);

  for (const key of Object.keys(storage)) {
    if (key.startsWith(TABLE_STATE_PREFIX)) {
      storage.removeItem(key);
    }
  }
};

export const isRangeFilter = (filterFunction: TFilterFunction) => {
  return [
    FILTER_FUNCTIONS_ENUM.IN,
    FILTER_FUNCTIONS_ENUM.NOT_IN,
    FILTER_FUNCTIONS_ENUM.BETWEEN,
    FILTER_FUNCTIONS_ENUM.NOT_BETWEEN,
  ].includes(filterFunction as FILTER_FUNCTIONS_ENUM);
};

export const isDefined = <T>(value: T | undefined | null) => {
  return value !== undefined && value !== null;
};
