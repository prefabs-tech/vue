<!-- Package analysis — produced by /analyze-package. Do not edit manually. -->

# Package Analysis: @prefabs.tech/vue3-ui

## Overview

A Vue3 UI component library providing 22+ reusable components and 5+ utility functions. This is a **pure custom component library** with no wrapped third-party dependencies (except vue-draggable-next which is directly passed through).

**Package Type:** Component library (per CONVENTIONS.md)
**Peer Dependency:** Vue >=3.2
**Key Dependency:** @vueuse/core (for window size and click-outside utilities)

---

## Base Library Passthrough Analysis

No wrapped dependencies — this is a custom component library.

**Note:** SortableList uses `vue-draggable-next` but imports it directly as `VueDraggableNext` and passes props through without transformation. This is passthrough usage, not a wrapped API.

---

## Summary

### Exports

#### Vue Plugin (Default Export)

- **install()** — Registers three components globally: `LoadingButton`, `LoadingIcon`, `Page`

#### Components (Individual Exports)

All components are exported as Vue 3 single-file components with `<script setup>`:

1. **Accordion** — Collapsible accordion/expansion panels
2. **BadgeComponent** — Small badge/label component with optional `title` prop
3. **ButtonElement** — Versatile button with props:
   - Severity levels: primary, secondary, alternate, success, danger, warning
   - Sizes: small, medium, large
   - Variants: outlined, filled, textOnly
   - Icon support (left/right), loading state, optional link behavior (`to` prop)
   - Emits: click
4. **Card** — Container component with header, body, footer slots; title prop
5. **LoadingButton** — Button with loading spinner overlay; props: `disabled`, `label`, `loading`; emits: click
6. **LoadingIcon** — Spinner icon component
7. **SubPane** — Sub-pane container
8. **ConfirmationModal** — Modal dialog for confirmation; props: `show`, `dismissOnClickOut`, `size`, `title`; emits: on:close
9. **Data** — Data display component
10. **Divider** — Visual divider/separator
11. **Dropdown** — Dropdown menu; accepts `menu` prop (array of DropdownMenu items); emits: select
12. **Errors** — Error display component with Error type support
13. **FileCard** — Card component for file display/actions
14. **FilesList** — List of files with actions
15. **DebouncedInput** — Input with debounced value handling
16. **GridContainer** — Grid layout container
17. **LoadingPage** — Full-page loading overlay; props: `loading`
18. **Message** — Message/notification component
19. **Modal** — Modal dialog; props: `show`, `dismissOnClickOut`, `size`, `title`; emits: on:close
20. **Page** — Full page layout with title, subtitle, toolbar, loading state

- Props: `centered`, `loading`, `subtitle`, `title`, `titleElement` (h1-h6), `titleTag`, `toolbarActionsMenu`
- Emits: action:click
- Responsive: collapses toolbar to dropdown on small screens

21. **Popup** — Popup/popover component
22. **ResponsiveMenu** — Navigation menu with responsive behavior
23. **SortableList** — Draggable list using vue-draggable-next

- Accepts list of `{ id, data, render? }` items
- Props: `list` (required)
- Emits: onDrag

24. **Stepper** — Multi-step form/wizard

- Props: `activeIndex`, `align` (start/center/end), `direction` (horizontal/vertical), `hideButtons`, `nextButtonProperties`, `previousButtonProperties`, `steps` (required)
- Emits: update:activeIndex, complete
- Exposes: `activeStepIndex`, `onNext()`, `onPrevious()`

25. **TabbedPanel** — Tab panel for organizing content
26. **TabView** — Advanced tab component with persistence and routing

- Props: `activeKey` (required), `enableHashRouting`, `id`, `interceptTabChange`, `interceptTabClose`, `lazy`, `persistState`, `persistStateStorage`, `position` (top/bottom/left/right), `tabs` (required), `visibleTabs`
- Emits: beforeTabChange, beforeTabClose, update:activeKey, update:visibleTabs
- Features: localStorage/sessionStorage persistence, hash-based routing, lazy loading, tab close interception
- Exposes: `closeTab()`, `setActiveTab()`

27. **Tooltip** — Tooltip component
28. **YoutubeFacade** — Facade component for YouTube video embeds
29. **FacebookSignInButton** — SSO button for Facebook login

- Props: `baseButtonOptions`, `disabled`, `loading`, `title` (required)
- Emits: click
- Inherits BaseButton styling (variant: light/dark, borderType: rectangular/pill)

30. **GoogleSignInButton** — SSO button for Google login

- Props: `baseButtonOptions`, `disabled`, `loading`, `title` (required)
- Emits: click
- Inherits BaseButton styling

#### Utility Functions

All exported from `src/utils/`:

1. **formatDate(date, locale?, options?)** — Format date using Intl.DateTimeFormat
   - Default options: year, month (short), day
   - Default locale: en-GB
   - Returns: formatted string or null if invalid
2. **formatDateTime(date, locale?, options?)** — Format date + time
   - Default options: year, month (short), day, hour (numeric), minute (numeric), hour12: true
   - Default locale: en-GB
   - Returns: formatted string or null if invalid
3. **formatDuration(timer: number)** — Format seconds as "mm:ss"
4. **getBestPosition(triggerRect)** — Calculate best overlay position (top/bottom/left/right)
   - Uses @vueuse/core `useWindowSize()` to measure available space
   - Returns position key as string
5. **getScrollableParents(element)** — Find all scrollable parent elements
   - Walks up DOM checking overflow CSS properties
   - Returns array of parent elements
6. **getStorage(storageType)** — Return localStorage or sessionStorage
   - Type: StorageType = "localStorage" | "sessionStorage"
   - Pure delegation
7. **useDebouncedValue<T>(value, delay)** — Vue composition function
   - Returns Promise<Ref<T>> of debounced value
   - Watches input, debounces with setTimeout
   - Clears previous timeout on new value

#### Types (Re-exports from `src/types/`)

1. **DropdownMenu** — Menu item type with: class?, disabled?, display?, icon?, key?, label?, severity?, value?
2. **Error** — Error object: { code: string; message?: string }
3. **FileMessages** — Message keys for file UI (archive, delete, download, rename, upload, etc.)
4. **IFile** — File object: { description?, downloadCount?, id (required), lastDownloadedAt?, originalFileName (required), size?, uploadedAt (required), uploadedBy (required) }
5. **TableMessages** — FileMessages + search/table-specific messages (searchPlaceholder, tableEmpty, fileSizeHeader)
6. **ToolbarActionMenu** — Extends DropdownMenu + ButtonElement props (combined type for Page toolbar)
7. **Tab** — Tab definition: { children?, closable?, icon?, key (required), label (required) }
8. **StepProperties** — Step in Stepper: { completedStepIcon?, content?, label?, step?, subtitle? }
9. **ActionButtonProperties** — Button properties for Stepper actions: { disabled?, iconLeft?, iconRight?, label?, rounded?, severity?, size?, variant? }

---

## Framework Constructs Identified

### Vue 3 Script Setup Pattern

All components use `<script setup lang="ts">` with:

- `defineProps()` for prop definitions with validators and defaults
- `defineEmits()` for event emissions
- `defineExpose()` for template/parent access (Stepper, TabView)

### Composition API Usage

- `useSlots()` — Access slot existence (Button, Card, Modal, etc.)
- `computed()` — Derived state (ButtonElement className, Page visibleActions, TabView activeTabComponent, etc.)
- `ref()` — Local reactive state (Modal ref, TabView activeTab/visibleTabs, Stepper activeStepIndex)
- `watch()` — Reactive watchers (TabView props, useDebouncedValue)
- `watchEffect()` — Stepper activeIndex synchronization
- `onMounted()` — Initialization (TabView persistence/routing)
- `onClickOutside()` from @vueuse/core — Modal dismiss behavior

### Prop Validators

- ButtonElement: severity (enum), size (enum), variant (enum)
- Page: titleElement (h1-h6)
- Modal/ConfirmationModal: size (auto/medium/large)
- BaseButton (SSO): borderType (rectangular/pill), variant (dark/light)
- TabView: position (top/bottom/left/right), persistStateStorage (localStorage/sessionStorage)
- Stepper: direction (horizontal/vertical), align (start/center/end)

### Conditional Logic & Feature Flags

- **ButtonElement:** Conditional icon rendering, loading state disables button, optional link behavior
- **Page:** Responsive toolbar (collapses to dropdown on small screens, determined by useWindowSize)
- **Modal/ConfirmationModal:** v-show for visibility, dismissOnClickOut interception
- **TabView:** Feature flags for persistState, enableHashRouting, interceptTabChange, interceptTabClose
- **Stepper:** hideButtons flag, direction-dependent rendering (vertical content only on vertical), lazy loading in TabView
- **Card:** Conditional header/footer based on slots

### Default Values

- ButtonElement: severity="primary", size="medium", variant="filled", ariaLabel="button"
- Modal: size="medium", show=false, dismissOnClickOut=false
- TabView: lazy=true, persistState=true, persistStateStorage="localStorage", position="top"
- Stepper: direction="horizontal", align="start"
- formatDate/formatDateTime: locale="en-GB", default Intl options
- getStorage: defaults to localStorage if not sessionStorage

### Storage & Persistence

- TabView: Persists active tab and visible tabs to localStorage/sessionStorage as JSON
- getOrientation utility: Maps tab position to aria-orientation
- clearSavedTabState utility: Removes persisted state

### Responsive Behavior

- Page: Uses useWindowSize to determine small/large screen threshold (576px)
- getBestPosition: Measures window dimensions to find optimal overlay placement

### Event Emission & Parent Communication

- All interactive components emit typed events (click, on:close, update:activeKey, etc.)
- Page delegates toolbar actions via action:click with menu item payload
- TabView emits before\* interceptors for cancel/custom handling
- Stepper exposes methods for parent control (onNext, onPrevious)

### Slot Patterns

- Named slots: header, footer, titleTag, subtitle, toolbar, label, iconLeft, iconRight
- Default slot fallback content in header/footer presence checks
- Slot passthrough in Stepper for step content

---

## Completeness Checklist

- [x] Classified every public export as "ours" (all custom Vue components and utilities)
- [x] Listed every framework construct added (Script setup, composition API usage, prop validators, conditional logic)
- [x] Identified every conditional branch (feature flags, responsive logic, slot presence checks)
- [x] Documented default values for all options we define
- [x] No wrapped dependencies — this is a pure component library
