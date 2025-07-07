import type { GroupedOption, SelectOption } from "../types";

export const normalizeOptions = (
  options: GroupedOption[] | SelectOption[],
  labelKey?: string,
  valueKey?: string,
) => {
  if (!options.length) {
    return [];
  }

  const isGrouped = (
    providedOptions: (SelectOption | GroupedOption)[],
  ): providedOptions is GroupedOption[] => "options" in providedOptions[0];

  const normalize = (option: SelectOption, groupLabel?: string) => ({
    ...option,
    groupLabel,
    label: (labelKey
      ? option[labelKey as keyof SelectOption]
      : option.label
    )?.toString(),
    value: (valueKey
      ? option[valueKey as keyof SelectOption]
      : option.value) as string | number,
  });

  if (isGrouped(options)) {
    return options.flatMap((group) =>
      group.options.map((option) => normalize(option, group.label)),
    );
  }

  return options.map((option) => normalize(option));
};
