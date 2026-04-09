<!-- Package analysis — produced by /analyze-package. Do not edit manually. -->

# Package Analysis: `@prefabs.tech/vue3-ui`

## Overview

A standalone Vue 3 UI component library with no third-party UI framework dependency. All components are custom-built. The only external runtime dependencies are `@vueuse/core` (composables used internally) and `vue-draggable-next` (used in SortableList). There is no wrapping of a base component library — this is pure custom code.

**Package type:** Component library (per CONVENTIONS.md)
**Peer dependency:** `vue >=3.2`

---

## Base Library Passthrough Analysis

### @vueuse/core — PARTIAL PASSTHROUGH (utility use)

- **Options type:** Composables used internally, not re-exported.
- **Options passed:** N/A — `onClickOutside` and `useWindowSize` used as implementation details only.
- **Features restricted:** N/A
- **Features added:** Components build viewport-aware positioning logic, scroll-parent tracking, and click-outside dismissal on top of these composables.

### vue-draggable-next — PARTIAL PASSTHROUGH

- **Options type:** Custom subset — only `:list` and `@change` are wired.
- **Options passed:** Transformed — `@change` is intercepted to emit `onDrag` with the updated list.
- **Features restricted:** Most vue-draggable-next options (animation, group, handle, filter, etc.) are not surfaced.
- **Features added:** Custom per-item render function (`element.render(element.data)`); grab-icon SVG injected.

---

## Summary

### Vue Plugin (Default Export)

`install(app)` registers three components globally:

- `"LoadingButton"` → `LoadingButton`
- `"LoadingIcon"` → `LoadingIcon`
- `"Page"` → `Page`

All other components are named exports only.

---

### Components

| Export | Description | Classification |
|---|---|---|
| `Accordion` | Slot-driven accordion. Filters default slots by `title` prop. Supports vertical/horizontal layout, custom active/inactive icons, self-collapse via `canSelfCollapse`. | OURS |
| `BadgeComponent` | Simple label badge. | OURS |
| `ButtonElement` | Polymorphic button/link. Renders `<a>` when `to` prop is set. Supports `severity`, `size`, `variant`, loading state, left/right icons. | OURS |
| `Card` | Slot-based card container. | OURS |
| `LoadingButton` | Button with inline `LoadingIcon`; disables when `loading` or `disabled`. Also globally registered. | OURS |
| `LoadingIcon` | Animated loading spinner. Also globally registered. | OURS |
| `SubPane` | Sub-pane layout container. | OURS |
| `ConfirmationModal` | `<dialog>`-based confirm/cancel dialog. Uses `@vueuse/core` `onClickOutside`. Calls `dialog.showModal()` on mount. `closable` and `dismissOnClickOut` flags. | OURS |
| `Data` | Data display component. | OURS |
| `Divider` | Horizontal/vertical divider. | OURS |
| `Dropdown` | Menu dropdown built on `Popup`. Filters `display !== false`, disables items, closes popup on select, emits `select`. | OURS |
| `DebouncedInput` | Form input with debounced value emission. | OURS |
| `Errors` | Renders a list of `Error` objects via `Error.vue` sub-component. | OURS |
| `FacebookSignInButton` | SSO button for Facebook using `BaseButton`. | OURS |
| `FileCard` | File display card with optional `ConfirmationFileActions`. | OURS |
| `FilesList` | List of `FileCard` items. | OURS |
| `GoogleSignInButton` | SSO button for Google using `BaseButton`; injects Google SVG logo. | OURS |
| `GridContainer` | CSS grid layout wrapper. | OURS |
| `LoadingPage` | Fixed full-screen overlay with `LoadingIcon`, shown when `loading` is true. | OURS |
| `Message` | Alert box with `severity`, icon, optional close button. Accepts string or string array as `message`. | OURS |
| `Modal` | Div-based modal overlay. Uses `@vueuse/core` `onClickOutside`. `dismissOnClickOut` flag. | OURS |
| `Page` | Page layout with header, title/subtitle/titleTag, responsive toolbar, loading overlay. Uses `useWindowSize` to collapse toolbar to dropdown at ≤576px. Also globally registered. | OURS |
| `Popup` | Positioned popup with smart viewport-aware placement. Tracks scroll parents and window resize. Exposes `isVisible`, `togglePopup`. | OURS |
| `ResponsiveMenu` | Nav menu using `<router-link>`. Emits `change-route` on click. Requires Vue Router. | OURS |
| `SortableList` | Draggable list using `vue-draggable-next`. Per-item render function support. | OURS (thin wrapper) |
| `Stepper` | Multi-step wizard. Horizontal and vertical layout. Controlled (`activeIndex` prop) or uncontrolled. Exposes `activeStepIndex`, `onNext`, `onPrevious`. | OURS |
| `TabbedPanel` | Slot-driven tab panel. Simpler than `TabView` — no persistence, no hash routing. | OURS |
| `TabView` | Full-featured tab component. Lazy/eager rendering, `persistState` (localStorage/sessionStorage), hash routing, `interceptTabChange`/`interceptTabClose`, closable tabs, `visibleTabs` filter. Exposes `closeTab`, `setActiveTab`. | OURS |
| `Tooltip` | Positioned tooltip with hover + click modes, configurable delay, viewport-aware placement, scroll-parent tracking. | OURS |
| `YoutubeFacade` | Lazy YouTube embed (facade pattern). Shows thumbnail until click, then swaps `<img>` for `<iframe>`. Falls back to YouTube thumbnail URL. | OURS |

---

### Utility Exports (`./utils`)

| Export | Description | Classification |
|---|---|---|
| `formatDate(date, locale?, options?)` | Formats date via `Intl`; defaults locale `"en-GB"`, format `{ year, month: "short", day }`; returns `null` on invalid input. | OURS |
| `formatDateTime(date, locale?, options?)` | Same as `formatDate` but adds `hour`, `minute`, `hour12: true`; strips a comma from result. | OURS |
| `formatDuration(timer: number)` | Converts seconds to `M:SS` string. | OURS |
| `getBestPosition(triggerRect: DOMRect)` | Returns side (`top`/`bottom`/`left`/`right`) with most available viewport space using `useWindowSize`. | OURS |
| `getScrollableParents(element: HTMLElement)` | Walks up DOM collecting elements with `overflow: auto/scroll`. | OURS |
| `getStorage(storageType: StorageType)` | Returns `sessionStorage` or `localStorage`. | OURS |
| `useDebouncedValue<T>(value, delay)` | Returns `Promise<Ref<T>>` that resolves after debounce. **Note:** uses module-level `timerId`, not instance-scoped — a known quirk. | OURS |

---

### Exported Types

| Type | Description |
|---|---|
| `DropdownMenu` | Menu item: `{ class?, disabled?, display?, icon?, key?, label?, severity?, value? }` |
| `Error` | `{ code: string; message?: string }` |
| `FileMessages` | Message key map for file UI actions |
| `IFile` | File object: `{ id, originalFileName, uploadedAt, uploadedBy, description?, size?, ... }` |
| `TableMessages` | `FileMessages` + table-specific keys |
| `ToolbarActionMenu` | Extends `DropdownMenu` + `ButtonElement` props for `Page` toolbar |
| `Tab` | `{ key, label, children?, closable?, icon? }` |
| `StepProperties` | `{ step?, label?, subtitle?, content?, completedStepIcon? }` |
| `StorageType` | `"localStorage" | "sessionStorage"` |

---

### Framework Constructs

- **`app.component()` registrations:** `LoadingButton`, `LoadingIcon`, `Page` (in plugin `install`).
- **`defineExpose`:**
  - `Popup` → `isVisible`, `togglePopup`
  - `Stepper` → `activeStepIndex`, `onNext`, `onPrevious`
  - `TabView` → `closeTab`, `setActiveTab`
- **`onClickOutside` (@vueuse/core):** `Modal`, `ConfirmationModal`, `Popup`.
- **`useWindowSize` (@vueuse/core):** `Page`, `Popup`, `Tooltip`, `utils/overlay.ts`.
- **`onBeforeUnmount` cleanup:** `Popup` and `Tooltip` remove all scroll/resize event listeners.
- **`watchEffect`:** `Stepper` syncs internal `activeStepIndex` to `activeIndex` prop.
- **`onMounted`:** `ConfirmationModal` calls `dialog.showModal()`; `TabView` restores persisted state and sets up hash routing listener.
- **`watch`:** `TabView` watches `props.activeKey`, `props.visibleTabs`, and combined `[visibleTabs, activeTab]` to sync state and persist to storage.

---

### Conditional Branches / Feature Flags

| Component | Condition | Effect |
|---|---|---|
| `ButtonElement` | `to` prop set | Renders `<a>` instead of `<button>`, sets `role="link"` |
| `ButtonElement` | `loading` | Disables, shows `LoadingIcon`, adds `loading` CSS class |
| `ButtonElement` | No `label`/`label` slot | Adds `icon-only` CSS class |
| `ConfirmationModal` | `closable && dismissOnClickOut` | Dismisses on outside click |
| `ConfirmationModal` | `closable` | Shows close icon button |
| `Dropdown` | `item.display !== false` | Filters item from rendered list |
| `Dropdown` | `item.disabled` | Prevents select emit and popup close |
| `Modal` | `dismissOnClickOut` | Dismisses on outside click |
| `Page` | `windowWidth > 576` | Shows individual buttons vs. Dropdown for toolbar |
| `Page` | `action.display !== false` | Filters toolbar action |
| `Popup` | `props.position` set | Uses fixed position; otherwise `getBestPosition()` auto-detects |
| `Stepper` | `direction === 'vertical'` | Renders `StepperContent` inline per-step vs. once below all steps |
| `Stepper` | `activeIndex !== undefined` | Controlled mode — `watchEffect` syncs internal state |
| `Stepper` | `hideButtons` | `onNext`/`onPrevious` are no-ops |
| `TabView` | `lazy` (default `true`) | Renders only active tab; `false` renders all with `v-show` |
| `TabView` | `persistState && id` | Saves/restores active tab + visible tabs to storage |
| `TabView` | `enableHashRouting` | Syncs active tab to/from URL hash via `hashchange` listener |
| `TabView` | `interceptTabChange` | Emits `beforeTabChange` instead of changing tab directly |
| `TabView` | `interceptTabClose` | Emits `beforeTabClose` instead of closing tab directly |
| `Tooltip` | `clickable` | Toggles visibility on click in addition to hover |
| `YoutubeFacade` | `imageSource` not set | Falls back to `https://img.youtube.com/vi/{token}/maxresdefault.jpg` |
| `SortableList` | `element.render` present | Renders via function; otherwise renders `element.data` as text |
| `Message` | `Array.isArray(message)` | Renders as `<ul>` list vs. single string |
| `Message` | `enableClose` (default `true`) | Shows close button |

---

### Default Values

| Component | Prop | Default |
|---|---|---|
| `ButtonElement` | `severity` | `"primary"` |
| `ButtonElement` | `size` | `"medium"` |
| `ButtonElement` | `variant` | `"filled"` |
| `ButtonElement` | `ariaLabel` | `"button"` |
| `Modal` | `size` | `"medium"` |
| `Modal` | `dismissOnClickOut` | `false` |
| `ConfirmationModal` | `header` | `"Confirmation required"` |
| `ConfirmationModal` | `message` | `"Are you sure you want to proceed?"` |
| `ConfirmationModal` | `closeIcon` | `"pi pi-times"` |
| `ConfirmationModal` | `icon` | `"pi pi-exclamation-triangle"` |
| `ConfirmationModal` | `closable` | `true` |
| `ConfirmationModal` | `dismissOnClickOut` | `true` |
| `ConfirmationModal` | `cancelButtonOptions.label` (applied in template) | `"No"` |
| `ConfirmationModal` | `cancelButtonOptions.severity` (applied in template) | `"secondary"` |
| `ConfirmationModal` | `cancelButtonOptions.variant` (applied in template) | `"outlined"` |
| `ConfirmationModal` | `acceptButtonOptions.label` (applied in template) | `"Yes"` |
| `Popup` | `offset` | `10` |
| `Popup` | `ariaLabel` | `"popup"` |
| `Tooltip` | `delay` | `100` |
| `Tooltip` | `offset` | `10` |
| `Stepper` | `align` | `"start"` |
| `Stepper` | `direction` | `"horizontal"` |
| `Page` | `titleElement` | `"h1"` |
| `Page` | `toolbarActionsMenu` | `[]` |
| `TabView` | `lazy` | `true` |
| `TabView` | `persistState` | `true` |
| `TabView` | `persistStateStorage` | `"localStorage"` |
| `TabView` | `position` | `"top"` |
| `TabView` | `visibleTabs` | `[]` (resolved to all tab keys) |
| `TabbedPanel` | `defaultIndex` | `0` |
| `TabbedPanel` | `position` | `"top"` |
| `Accordion` | `defaultIndex` | `0` |
| `Accordion` | `direction` | `"vertical"` |
| `Accordion` | `canSelfCollapse` | `false` |
| `Message` | `severity` | `"info"` |
| `Message` | `enableClose` | `true` |
| `Message` | `showIcon` | `true` |
| `SSOBaseButton` | `variant` | `"light"` |
| `SSOBaseButton` | `borderType` | `"rectangular"` |
| `YoutubeFacade` | `aspectRatio` | `"16/9"` |
| `formatDate` | `locale` | `"en-GB"` |
| `formatDateTime` | `locale` | `"en-GB"` |

---

## Completeness Checklist

- [x] Classified every public export as "ours" or "theirs"
- [x] Listed every framework construct added (plugin install, defineExpose, vueuse hooks, lifecycle registrations)
- [x] Identified every conditional branch (feature flags, responsive logic, slot/prop presence checks)
- [x] Documented default values for all options we define
- [x] Produced a passthrough classification for every wrapped dependency (`@vueuse/core`, `vue-draggable-next`)
