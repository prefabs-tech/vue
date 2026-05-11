<!-- Structured feature inventory — used by automated test generation. Developer docs: see GUIDE.md -->

# Features: @prefabs.tech/vue3-ui

## Installation & Setup

1. **Vue Plugin Default Export** — Automatically registers three components globally (LoadingButton, LoadingIcon, Page) when installed on an app instance.

## Core Components

2. **ButtonElement** — Versatile button component with severity levels (primary, secondary, alternate, success, danger, warning), sizes (small, medium, large), variants (outlined, filled, textOnly), optional left/right icons, loading state, optional link behavior via `to` prop, and custom title attribute. Emits click event.

3. **Card** — Container component with optional header, body, and footer slots. Accepts `title` prop to render header automatically.

4. **Modal** — Modal dialog with visibility control, title, auto-closing close button, optional content and footer slots, and `dismissOnClickOut` option. Emits `on:close` event.

5. **ConfirmationModal** — Confirmation-specific modal dialog variant with same features as Modal but semantically named for confirmation flows.

6. **Page** — Full-page layout component with title, subtitle, centered layout option, loading overlay, and responsive toolbar. Toolbar collapses to dropdown menu on small screens (≤576px). Accepts `toolbarActionsMenu` array and emits `action:click` with menu item. Supports custom heading level via `titleElement` prop (h1-h6) and optional `titleTag` badge.

7. **Badge** — Small badge/label component with optional `title` prop.

8. **Accordion** — Collapsible accordion/expansion panel component.

9. **LoadingButton** — Button component with integrated loading spinner overlay. Props: `label`, `disabled`, `loading`. Emits `click` event.

10. **LoadingIcon** — Spinner/loading icon component.

11. **SubPane** — Sub-pane container component.

12. **Divider** — Visual divider/separator component.

13. **Dropdown** — Dropdown menu component accepting `menu` prop (array of DropdownMenu items with label, icon, severity, disabled, display flags). Emits `select` event with selected menu item.

14. **Data** — Data display component.

15. **Message** — Message/notification component.

16. **Popup** — Popup/popover component.

17. **LoadingPage** — Full-page loading overlay with `loading` prop to show/hide.

18. **Errors** — Error display component with type-safe Error object support.

19. **GridContainer** — Grid layout container component.

20. **DebouncedInput** — Input component with built-in debounced value handling.

21. **FileCard** — Card component specialized for file display and file actions.

22. **FilesList** — List component for displaying multiple files with actions.

23. **ResponsiveMenu** — Navigation menu with responsive behavior.

24. **Tooltip** — Tooltip component.

25. **YoutubeFacade** — Facade component for embedding YouTube videos.

26. **GoogleSignInButton** — SSO button for Google Sign-In with logo and customizable styling. Accepts `title`, `loading`, `disabled`, and baseButtonOptions. Emits `click`.

27. **FacebookSignInButton** — SSO button for Facebook Sign-In with logo and customizable styling. Accepts `title`, `loading`, `disabled`, and baseButtonOptions. Emits `click`.

## Advanced Components

28. **TabView** — Advanced tab component with multiple advanced features:
    - **Lazy Loading** — Only renders active tab content by default (configurable)
    - **Persistence** — Saves active tab and visible tabs list to localStorage/sessionStorage
    - **Hash-Based Routing** — Tabs can be selected via URL hash (configurable)
    - **Tab Interception** — Emit events before tab change/close for custom validation/handling (configurable)
    - **Dynamic Tab Visibility** — Filter visible tabs while keeping all tabs in the definition
    - **Multiple Positions** — Support for top, bottom, left, right tab positions
    - **Tab Closing** — Optional tab close buttons with confirmation option
    - **Template Slots** — Render tab content via named slots or VNode children

29. **Stepper** — Multi-step form/wizard component with:
    - **Horizontal & Vertical Layouts** — Support both directions with conditional content rendering
    - **Step Progress Tracking** — Visual progress through steps with custom step numbering
    - **Completed Step Indicators** — Show checkmark or custom icon for completed steps
    - **Button Customization** — Customize next/previous button appearance and behavior
    - **Completion Event** — Emit event when final step is reached
    - **Step Content** — Render step-specific content via named slots
    - **Method Exposure** — Expose `onNext()`, `onPrevious()`, and `activeStepIndex` for parent control
    - **Button Hiding** — Option to hide navigation buttons for manual control

30. **SortableList** — Draggable reorderable list component using vue-draggable-next with:
    - **Custom Rendering** — Support for custom render functions per list item
    - **Drag Events** — Emit updated list on drag/reorder
    - **Grab Icon** — Built-in visual drag handle indicator

31. **TabbedPanel** — Slot-based tab panel component. Renders default slot children as tabs when each child has a `title` prop. Props: `defaultIndex` (default 0), `position` (top/bottom/left/right). No external active state — selection is managed internally. Supports optional `icon` named slot for custom tab icon rendering.

## Utility Functions

32. **formatDate** — Format date values using Intl.DateTimeFormat with customizable options and locale (default: en-GB, format: "Jan 1, 2025").

33. **formatDateTime** — Format date and time values with customizable options and locale (default: en-GB, format: "Jan 1, 2025, 2:30 PM").

34. **formatDuration** — Format duration in seconds as "mm:ss" format (e.g., 90 seconds → "1:30").

35. **useDebouncedValue** — Vue 3 composition function that returns a promise resolving to a ref of debounced value. Automatically manages debounce timeout with configurable delay.

36. **getBestPosition** — Calculate optimal overlay/popover position (top/bottom/left/right) based on viewport space using window dimensions. Returns position key as string.

37. **getScrollableParents** — Find all scrollable parent elements up the DOM tree by checking overflow CSS properties. Returns array of scrollable parent elements.

38. **getStorage** — Access browser storage (localStorage or sessionStorage) with type-safe storage selection.

## Type Exports

39. **DropdownMenu** — Type for dropdown menu items with optional properties: class, disabled, display (visibility flag), icon, key, label, severity (primary/secondary/alternate/success/danger/warning), value.

40. **Error** — Type for error objects with required `code` and optional `message` fields.

41. **Tab** — Type for TabView tab definitions with required `key` and `label`, optional `icon`, `closable`, and `children` (VNode or string content).

42. **FileMessages** — Type for translatable message keys related to file operations (archive, delete, download, rename, upload, etc.).

43. **IFile** — Type for file objects with required `id`, `originalFileName`, `uploadedAt`, `uploadedBy`, and optional properties: `description`, `downloadCount`, `lastDownloadedAt`, `size`.

44. **TableMessages** — Type extending FileMessages with table-specific messages: `searchPlaceholder`, `tableEmpty`, `fileSizeHeader`.
