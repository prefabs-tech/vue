<!-- Package analysis — produced by /analyze-package. Do not edit manually. -->

# Package Analysis: @prefabs.tech/vue3-tanstack-table

## Base Library Passthrough Analysis

### @tanstack/vue-table — MODIFIED

- **Options type:** Extended via TypeScript module augmentation — adds custom fields to `ColumnDefBase` and `ColumnMeta`
- **Options passed:** Core table options passed through to `useVueTable()` with modifications — adds state management, callbacks, and custom configuration
- **Features restricted:** None — all base library features remain accessible
- **Features added:**
  - Custom column definition fields: `align`, `dataType`, `dateOptions`, `numberOptions`, `tooltip`, `tooltipOptions`, `filterPlaceholder`, `customFilterComponent`, `width`, `minWidth`, `maxWidth`, `className`
  - Built-in data formatters for number, date, datetime, currency types
  - Filter variants: text, select, multiselect, dateRange, range
  - Server-side table support with request JSON generation
  - Persistent table state (localStorage/sessionStorage)
  - Row selection with checkboxes
  - Column visibility toggle and reordering
  - Action menu system with confirmation modals
  - Pagination component with customizable controls
  - Tooltip support on cells
  - Custom filter components per column
  - Debounced input for filters
  - Active column highlighting

### @prefabs.tech/vue3-ui — DEPENDENCY

Used for UI components (ButtonElement, Popup, DebouncedInput, LoadingIcon, Tooltip, ConfirmationModal, Dropdown, SortableList, FilesList). Not wrapped — consumed directly.

### @prefabs.tech/vue3-form — DEPENDENCY

Used for form inputs (Checkbox, SelectInput, DatePicker, NumberInput). Not wrapped — consumed directly.

---

## Code Classification

### OURS — Custom Logic

#### Components

**Table.vue (Main Data Table)**

- Props validation and defaults (lines 107-228)
- Column preparation logic with row selection and actions columns (lines 442-558)
- Custom filter functions for multiselect, select, dateRange, range variants (lines 473-522)
- State management: columnFilters, columnOrder, columnVisibility, pagination, rowSelection, sorting (lines 238-251)
- Computed properties: isFilterRowVisible, persistentState, totalItems, selectedRows (lines 253-279)
- Server-side table support with fetchData() and request JSON emission (lines 421-429)
- Persistent state save/restore from storage (lines 571-590)
- onReset() handler to clear all filters/sorting/pagination (lines 431-440)
- Conditional pagination rendering based on isServerTable or paginated props (lines 44-56)
- Loading overlay with spinner (lines 3-5)
- Toolbar slot integration (lines 12-24)
- Footer slot support (lines 39-41)
- Watch for state changes to persist (lines 412-419)

**TableHeader.vue**

- Sort icon rendering with three states: unsorted, asc, desc (lines 39-88)
- Filter row rendering with multiple filter variants (lines 93-201)
- Active column highlighting logic (lines 237-244)
- Column filter value getter (lines 246-248)
- Date range formatting for filters (lines 250-267)
- Range filter update logic (lines 269-287)
- Custom filter component support (lines 118-120)
- Click handler for sortable columns (lines 28-32)
- Alignment calculation based on dataType (lines 17-22, 105-110)

**TableBody.vue**

- Empty table message rendering (lines 51-57)
- Cell formatting with custom formatters (lines 100-159)
- Default formatters: number, date, datetime, currency (lines 107-145)
- Tooltip rendering on cells (lines 27-46)
- Tooltip content resolution (lines 161-171)
- Row selection data attribute (line 8)
- Cell alignment and width styling (lines 15-25)

**TanstackTable.vue (Simple Table)**

- Column helper usage to build columns from props (lines 193-207)
- Pagination controls: page indicators, go-to-page input, page size selector (lines 71-98)
- Navigation buttons: first, previous, next, last (lines 99-140)
- Header toggle for responsive design (lines 4-8, 232-236)
- Sorting state management (lines 209-222)
- Page change and page size handlers (lines 238-248)

**TableToolbar.vue**

- Reset button with custom label (lines 3-9)
- Column visibility popup with sortable list (lines 11-21)
- Items list generation excluding select/actions columns (lines 68-91)
- Drag handler to reorder columns (lines 93-101)
- Checkbox rendering for column visibility (lines 83-88)

**Pagination.vue**

- Items per page control with dropdown (lines 3-14)
- Page input control with debounced input (lines 16-23)
- First/last/previous/next buttons (lines 26-88)
- Page buttons rendering (lines 52-61)
- Page calculation logic (lines 163-169)
- Event handlers for page and items-per-page changes (lines 171-186)

**TableDataActions.vue**

- Action filtering based on display/disabled functions (lines 119-133)
- Mode switching: auto, buttons, dropdown (lines 152-164)
- Confirmation modal integration (lines 29-65)
- Confirmation options resolution (lines 136-143)
- Action selection with confirmation check (lines 172-180)

**FilesTable/Index.vue**

- Default columns definition for file tables (lines 125-224)
- Action menu generation based on props (lines 226-293)
- Column merging logic (lines 295-308)
- Action routing to specific emits (lines 310-341)

**FilesPresentation/Index.vue**

- Presentation mode switching: list vs table (lines 2-37)
- List visible file details mapping (lines 119-134)
- Action event forwarding (lines 136-148)

#### Utilities (utilities.ts)

- `formatNumber()` — number formatting with Intl.NumberFormat (lines 40-51)
- `formatDate()` — date formatting with default options (lines 53-61)
- `formatDateTime()` — datetime formatting with default options (lines 63-71)
- `getFilterOperator()` — maps filter functions to operators (lines 73-137)
- `getSortDirection()` — converts boolean to ASC/DESC (lines 139-151)
- `getAlignValue()` — determines cell alignment from dataType (lines 153-171)
- `getRangeFilter()` — builds range filter objects (lines 173-205)
- `getRequestJSON()` — generates server request JSON from table state (lines 207-306)
- `getSavedTableState()` — retrieves persisted state from storage (lines 308-322)
- `saveTableState()` — persists table state to storage (lines 324-335)
- `clearSavedTableStates()` — removes all saved table states (lines 337-347)
- `isRangeFilter()` — checks if filter is range type (lines 349-356)
- `isDefined()` — null/undefined check (lines 358-360)

#### Types (types.ts)

- Module augmentation for @tanstack/vue-table (lines 13-41)
- Custom type definitions: FilterOption, TFilterRequest, TLimit, TOffset, TSingleFilter, TSingleSort, TSortRequest, CellAlignmentType, CellDataType, FormatDateType, FormatNumberType, DataActionsMenuItem, PersistentTableState, TFilterFn, TFilterVariant, TRequestJSON, TSortDirection (lines 43-174)

#### Constants (constants.ts)

- Default values: COL_SIZE, COLUMNS_DATA, INPUT_DEBOUNCE_TIME, PAGE_INDEX, PAGE_PER_OPTIONS, PAGE_SIZE, TABLE_DATA, TOTAL_ITEMS (lines 1-8)
- TABLE_STATE_PREFIX for storage keys (line 10)

#### Enums (enums.ts)

- FILTER_FUNCTIONS_ENUM — filter function names (lines 1-21)
- FILTER_OPERATORS_ENUM — filter operator codes (lines 23-37)

### THEIRS — Direct Passthrough

**From @tanstack/vue-table:**

- `FlexRender` component — used directly for rendering cells and headers
- `useVueTable()` — core table hook with our state/callbacks
- `getCoreRowModel()`, `getFilteredRowModel()`, `getPaginationRowModel()`, `getSortedRowModel()` — row model functions passed directly
- `createColumnHelper()` — used in TanstackTable.vue for column creation
- Table instance methods: `getRowModel()`, `getHeaderGroups()`, `getAllColumns()`, `getVisibleLeafColumns()`, `getSelectedRowModel()`, `getFilteredRowModel()`, `getPageCount()`, `getCanPreviousPage()`, `getCanNextPage()`, `setPageIndex()`, `setPageSize()`, `previousPage()`, `nextPage()`, `toggleAllPageRowsSelected()`, `getCenterTotalSize()`, `getAllLeafColumns()`
- Column methods: `getCanSort()`, `getToggleSortingHandler()`, `getIsSorted()`, `getCanFilter()`, `setFilterValue()`, `getFilterValue()`, `getIsFiltered()`, `getIsVisible()`, `toggleVisibility()`
- Row methods: `getVisibleCells()`, `getIsSelected()`, `toggleSelected()`
- Cell methods: `getContext()`, `getValue()`

**From @prefabs.tech/vue3-ui:**

- ButtonElement, Popup, DebouncedInput, LoadingIcon, Tooltip, ConfirmationModal, Dropdown, SortableList, FilesList, getStorage — used directly

**From @prefabs.tech/vue3-form:**

- Checkbox, SelectInput, DatePicker, NumberInput — used directly

---

## Framework Constructs

### Vue 3 Composition API

- **Props definitions:** All components use `defineProps()` with TypeScript types
- **Emits definitions:** Components use `defineEmits()` for event declarations
- **Computed properties:** Used extensively for derived state (isFilterRowVisible, totalItems, selectedRows, filteredItems, etc.)
- **Refs:** Used for reactive state (columnFilters, columnOrder, columnVisibility, pagination, rowSelection, sorting, expand, showConfirmation, selectedAction, itemsPerPage)
- **Watchers:** Table.vue watches state changes for persistence (lines 412-419)
- **Slots:** toolbar, footer, pagination, confirmationModal, trigger slots provided

### Component Patterns

- **Script setup:** All components use `<script setup lang="ts">`
- **Template refs:** No direct template refs used
- **Provide/Inject:** Not used
- **Component registration:** All components export default name for DevTools

---

## Conditional Logic & Feature Flags

### Table.vue

- `isServerTable` — enables server-side mode with manual filtering/sorting/pagination (lines 175, 308, 359, 374, 394, 405-407, 566)
- `paginated` — enables/disables pagination (lines 180, 246, 436)
- `enableRowSelection` — adds selection column with checkboxes (lines 149, 443-463)
- `persistState` — enables state persistence to storage (lines 188, 415, 560, 571)
- `showColumnAction` — shows column visibility toggle (line 12)
- `showResetButton` — shows reset button (line 12)
- `isLoading` — shows loading overlay (lines 174, 3)
- `dataActionMenu.length > 0` — adds actions column (lines 14, 531-558)
- `highlightActiveHeaderColumn` — enables active column highlighting (line 157)
- `isFilterRowVisible` — shows filter row if any column has enableColumnFilter (lines 253-255)
- `totalItems > 0` — shows pagination only if items exist (line 44)

### TableHeader.vue

- `isFilterRowVisible` — renders filter row (line 93)
- `column.getCanFilter()` — renders filter input for column (line 117)
- `column.columnDef.customFilterComponent` — uses custom filter component (lines 118-120)
- `column.columnDef.meta?.filterVariant` — determines filter input type (lines 123-186)
- `column.columnDef.enableSorting` — adds sortable class and click handler (lines 14, 39)
- `highlightActiveColumn` — adds highlight class to active columns (line 237)

### TableBody.vue

- `table.getRowModel().rows?.length` — shows rows or empty message (line 3)
- `enableRowSelection` — adds data-selected attribute (line 8)
- `cell.column.columnDef.tooltip` — wraps cell in Tooltip component (line 28)
- `cell.column.columnDef.dataType` — determines formatter to use (line 147)

### TanstackTable.vue

- `props.enableToggle` — shows header toggle button (line 4)
- `column.sort` — enables sorting for column (line 203)

### TableDataActions.vue

- `action.display` — filters visible actions (lines 123-126)
- `action.disabled` — disables action buttons (lines 127-130)
- `action.requireConfirmationModal` — shows confirmation before action (lines 175-176)
- `mode` — switches between buttons/dropdown/auto (lines 152-164)
- `displayActions` — shows/hides entire actions menu (lines 145-150)

### FilesPresentation/Index.vue

- `presentation` — switches between list and table views (lines 3, 18)

---

## Default Values

### Table.vue

- `actionsMode: "auto"` — auto-switch between buttons/dropdown based on count
- `autoModeCount: 1` — threshold for auto mode switching
- `columnActionButtonLabel: undefined` — uses component default
- `customFormatters: {}` — no custom formatters
- `emptyTableMessage: undefined` — uses component default
- `enableRowSelection: false` — no row selection
- `enableSortingRemoval: false` — cannot remove sorting by clicking
- `highlightActiveHeaderColumn: false` — no active column highlighting
- `initialFilters: []` — no initial filters
- `initialSorting: []` — no initial sorting
- `inputDebounceTime: undefined` — uses component default (300ms from constants)
- `isLoading: false` — not loading
- `isServerTable: false` — client-side table
- `paginated: true` — pagination enabled
- `paginationOptions: {}` — uses component defaults
- `persistState: true` — state persistence enabled
- `persistStateStorage: "localStorage"` — uses localStorage
- `rowPerPage: 10` — 10 rows per page
- `rowPerPageOptions: [10, 20, 30]` — page size options
- `showColumnAction: false` — column toggle hidden
- `showResetButton: false` — reset button hidden
- `totalRecords: 0` — no records for server tables
- `visibleColumns: []` — all columns visible

### TableHeader.vue

- `highlightActiveColumn: false` — no highlighting
- `inputDebounceTime: undefined` — uses component default
- `isFilterRowVisible: false` — filter row hidden

### TableBody.vue

- `customFormatters: {}` — no custom formatters
- `emptyTableMessage: "No results."` — default empty message
- `enableRowSelection: false` — no selection
- `locale: undefined` — uses browser locale

### Pagination.vue

- `inputDebounceTime: undefined` — no debounce
- `itemsPerPageControlLabel: "Items per page"` — default label
- `itemsPerPageOptions: [5, 10, 20, 30]` — default options
- `pageInputLabel: "Go to page:"` — default label
- `showFirstLastButtons: true` — first/last buttons shown
- `showItemsPerPageControl: true` — items per page control shown
- `showPageButtons: false` — page buttons hidden
- `showPageInput: false` — page input hidden
- `showPreviousNextButtons: true` — prev/next buttons shown

### TableToolbar.vue

- `columnActionButtonLabel: "Columns"` — default label
- `resetButtonLabel: "Reset all"` — default label

### TableDataActions.vue

- `autoModeCount: 1` — threshold for auto mode
- `data: {}` — empty data object
- `displayActions: true` — actions shown
- `mode: undefined` — uses auto mode

### FilesTable/Index.vue

- `id: "files-table"` — default table ID
- `initialSorting: []` — no initial sorting
- `persistState: true` — state persistence enabled
- `persistStateStorage: "localStorage"` — uses localStorage
- `totalRecords: 0` — no records for server tables

### FilesPresentation/Index.vue

- `presentation: "list"` — list view by default
- `visibleFileDetails: [all fields]` — all fields visible

---

## Exports

### Components

- `Table` — Main data table component with full feature set
- `TableHeader` — Table header with sorting and filtering
- `TableBody` — Table body with cell formatting
- `TanstackTable` — Simple table with basic pagination
- `FilesTable` — Pre-configured table for file listings
- `FilesPresentation` — Wrapper for list/table file views

### Types

- `DataActionsMenuItem` — Action menu item definition
- `FilterFunction` — Re-export from @tanstack/vue-table
- `FilterFunctions` — Re-export from @tanstack/vue-table
- `FilterOption` — Filter option for select/multiselect
- `SortingState` — Re-export from @tanstack/vue-table
- `TableColumnDefinition` — Re-export of ColumnDef from @tanstack/vue-table
- `TableRow` — Re-export from @tanstack/vue-table
- `TFilterRequest` — Server filter request structure
- `TLimit` — Pagination limit type
- `TOffset` — Pagination offset type
- `TRequestJSON` — Complete server request JSON structure
- `TSingleFilter` — Single filter object
- `TSingleSort` — Single sort object
- `TSortDirection` — Sort direction type
- `TSortRequest` — Server sort request structure

---

## Completeness Checklist

- [x] Classified every public export as "ours" or "theirs"
- [x] Listed every framework construct added (props, emits, computed, refs, watchers, slots)
- [x] Identified every conditional branch (feature flags, enable/disable logic)
- [x] Documented default values for all options we define
- [x] Produced a passthrough classification for every wrapped dependency
