<!-- Structured feature inventory — used by automated test generation. Developer docs: see GUIDE.md -->

# Features

## Column Configuration

1. **Custom column metadata fields** — Extend column definitions with custom fields via TypeScript module augmentation
2. **Cell alignment** — Configure text alignment per column with `align` property
3. **Data type specification** — Set `dataType` to enable automatic formatting (number, date, datetime, currency)
4. **Date formatting options** — Customize date display with `dateOptions` (Intl.DateTimeFormatOptions)
5. **Number formatting options** — Customize number display with `numberOptions` (Intl.NumberFormatOptions)
6. **Cell tooltips** — Add tooltips to cells with `tooltip` property (string or function)
7. **Tooltip customization** — Configure tooltip behavior with `tooltipOptions`
8. **Filter placeholder text** — Set custom placeholder for filter inputs with `filterPlaceholder`
9. **Custom filter components** — Use custom Vue components for column filters with `customFilterComponent`
10. **Column width constraints** — Set `width`, `minWidth`, `maxWidth` for column sizing
11. **Column CSS classes** — Add custom classes to columns with `className`

## Data Formatting

12. **Number formatting** — Automatic formatting for numeric values with locale support
13. **Date formatting** — Format dates with default or custom options
14. **DateTime formatting** — Format date-time values with time display
15. **Currency formatting** — Format currency values with locale-aware symbols
16. **Custom formatters** — Override default formatters with custom formatting functions

```typescript
const customFormatters = {
  number: (value: number) => `${value.toFixed(2)}%`,
  date: (value: Date) => value.toLocaleDateString("en-US"),
};
```

## Filtering

17. **Text filter** — Default text input filter for columns
18. **Select filter** — Single-select dropdown filter with options
19. **Multiselect filter** — Multiple-select filter with checkboxes
20. **Date range filter** — Filter by date range with start/end date pickers
21. **Range filter** — Filter numeric values by min/max range
22. **Custom filter functions** — Built-in filter functions for each variant (multiselect, select, dateRange, range)
23. **Debounced filter input** — Configurable debounce delay for filter inputs
24. **Initial filters** — Set default filters on table mount with `initialFilters`
25. **Filter row visibility** — Automatically show filter row when any column has `enableColumnFilter`

## Sorting

26. **Column sorting** — Click headers to sort columns
27. **Multi-column sorting** — Sort by multiple columns simultaneously
28. **Initial sorting** — Set default sort order with `initialSorting`
29. **Sort removal** — Optionally allow removing sort by clicking (via `enableSortingRemoval`)
30. **Sort indicators** — Visual icons showing sort state (unsorted, asc, desc)

## Pagination

31. **Client-side pagination** — Automatic pagination for local data
32. **Configurable page size** — Set rows per page with `rowPerPage`
33. **Page size options** — Provide dropdown options with `rowPerPageOptions`
34. **Pagination controls** — First, previous, next, last buttons
35. **Page input** — Jump to specific page with input field
36. **Items per page control** — Dropdown to change page size
37. **Page buttons** — Optional numbered page buttons
38. **Custom pagination labels** — Customize control labels
39. **Conditional pagination** — Show/hide pagination based on `paginated` prop

## Row Selection

40. **Row selection with checkboxes** — Enable with `enableRowSelection`
41. **Select all rows** — Checkbox in header to select/deselect all
42. **Selected rows tracking** — Access selected rows via `selectedRows` computed property
43. **Visual selection state** — Selected rows have `data-selected` attribute

## Server-Side Tables

44. **Server-side mode** — Enable with `isServerTable` for backend-driven tables
45. **Request JSON generation** — Automatic generation of filter/sort/pagination request JSON
46. **Manual data fetching** — Emit `fetchData` event with request JSON on state changes
47. **Total records tracking** — Provide `totalRecords` for server-side pagination

```typescript
<Table
  :columns="columns"
  :data="serverData"
  :total-records="totalRecords"
  is-server-table
  @update:request="handleFetchData"
/>
```

## State Persistence

48. **Persistent table state** — Save/restore filters, sorting, pagination, column visibility, and order
49. **Storage options** — Choose localStorage or sessionStorage with `persistStateStorage`
50. **Unique table ID** — Use `id` prop to namespace saved state
51. **Automatic state save** — Watch state changes and persist automatically
52. **State restoration** — Load saved state on component mount
53. **Clear saved states** — Utility function to remove all saved table states

## Column Management

54. **Column visibility toggle** — Show/hide columns with popup control
55. **Column reordering** — Drag-and-drop to reorder columns
56. **Initial column visibility** — Set visible columns with `visibleColumns` prop
57. **Exclude columns from visibility control** — Selection and actions columns are excluded

## Actions Menu

58. **Row action menu** — Add action buttons/dropdown per row with `dataActionMenu`
59. **Action display conditions** — Show/hide actions based on row data with `display` function
60. **Action disabled state** — Disable actions conditionally with `disabled` function
61. **Confirmation modals** — Require confirmation before action execution
62. **Action modes** — Switch between buttons, dropdown, or auto mode
63. **Auto mode threshold** — Configure when to switch from buttons to dropdown with `autoModeCount`

```typescript
const actions: DataActionsMenuItem[] = [
  {
    action: "delete",
    confirmationOptions: {
      title: "Confirm Delete",
      message: "Are you sure?",
    },
    label: "Delete",
    requireConfirmationModal: true,
  },
];
```

## UI Customization

64. **Toolbar slot** — Custom content in toolbar area
65. **Footer slot** — Custom content in footer area
66. **Pagination slot** — Custom pagination component
67. **Confirmation modal slot** — Custom confirmation modal
68. **Empty table message** — Customize "no results" message
69. **Loading overlay** — Show loading spinner with `isLoading` prop
70. **Active column highlighting** — Highlight filtered/sorted columns with `highlightActiveHeaderColumn`
71. **Reset button** — Clear all filters/sorting/pagination with reset button
72. **Custom button labels** — Customize toolbar button labels

## Utilities

73. **getRequestJSON** — Generate server request JSON from table state
74. **getSavedTableState** — Retrieve persisted state from storage
75. **saveTableState** — Persist table state to storage
76. **clearSavedTableStates** — Remove all saved table states
77. **formatNumber** — Format numbers with locale support
78. **formatDate** — Format dates with options
79. **formatDateTime** — Format date-time values
80. **getFilterOperator** — Map filter functions to operator codes
81. **getSortDirection** — Convert boolean to ASC/DESC
82. **getAlignValue** — Determine alignment from data type

## Pre-built Components

83. **FilesTable** — Pre-configured table for file listings with default columns
84. **FilesPresentation** — Wrapper component with list/table view toggle
85. **TanstackTable** — Simple table with basic pagination and responsive header toggle

## Type Exports

86. **TableColumnDefinition** — Type for column definitions (re-export of ColumnDef)
87. **DataActionsMenuItem** — Type for action menu items
88. **FilterOption** — Type for select/multiselect filter options
89. **TRequestJSON** — Type for server request JSON structure
90. **TSingleFilter** — Type for single filter object
91. **TSingleSort** — Type for single sort object
92. **TFilterRequest** — Type for filter request array
93. **TSortRequest** — Type for sort request array
