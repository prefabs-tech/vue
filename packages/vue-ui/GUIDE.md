# @prefabs.tech/vue3-ui — Developer Guide

## Installation

### For package consumers

```bash
npm install @prefabs.tech/vue3-ui
```

Or with pnpm:

```bash
pnpm add @prefabs.tech/vue3-ui
```

### For monorepo development

```bash
pnpm install
pnpm --filter @prefabs.tech/vue3-ui test
pnpm --filter @prefabs.tech/vue3-ui build
```

---

## Setup

Import the plugin and register it with your Vue 3 app:

```typescript
import { createApp } from "vue";
import VueUI from "@prefabs.tech/vue3-ui";
import "@prefabs.tech/vue3-ui/dist/vue3-ui.css";

const app = createApp(/* ... */);
app.use(VueUI);
```

This globally registers `LoadingButton`, `LoadingIcon`, and `Page` components. All other components must be explicitly imported:

```typescript
import {
  ButtonElement,
  Card,
  Modal,
  TabView,
  Stepper,
} from "@prefabs.tech/vue3-ui";
```

All subsequent examples assume the setup above.

---

## Buttons

### ButtonElement

Versatile button component supporting multiple severity levels, sizes, variants, icons, loading state, and optional link behavior.

```typescript
<script setup lang="ts">
import { ref } from "vue";
import { ButtonElement } from "@prefabs.tech/vue3-ui";

const isSaving = ref(false);

async function handleSave() {
  isSaving.value = true;
  try {
    // save logic
  } finally {
    isSaving.value = false;
  }
}
</script>

<template>
  <div>
    <!-- Basic button -->
    <ButtonElement label="Click me" @click="handleClick" />

    <!-- With severity and size -->
    <ButtonElement label="Success" severity="success" size="large" />

    <!-- With icons -->
    <ButtonElement label="Download" icon-left="icon-download" />

    <!-- As link -->
    <ButtonElement label="Go to Home" to="/home" severity="primary" />

    <!-- Loading state -->
    <ButtonElement label="Save" :loading="isSaving" :disabled="isSaving" @click="handleSave" />

    <!-- Outlined variant -->
    <ButtonElement label="Cancel" variant="outlined" severity="danger" />

    <!-- Text-only variant -->
    <ButtonElement label="Clear" variant="textOnly" />

    <!-- Icon-only button -->
    <ButtonElement icon-left="icon-settings" aria-label="Settings" />

    <!-- With custom icon slot -->
    <ButtonElement label="Upload">
      <template #iconLeft>
        <i class="custom-upload-icon"></i>
      </template>
    </ButtonElement>
  </div>
</template>
```

**Available severity levels:** primary, secondary, alternate, success, danger, warning  
**Available sizes:** small, medium, large  
**Available variants:** filled, outlined, textOnly

---

### LoadingButton

Simplified button with integrated loading spinner and label.

```typescript
<script setup lang="ts">
import { ref } from "vue";
import { LoadingButton } from "@prefabs.tech/vue3-ui";

const isSubmitting = ref(false);

async function handleSubmit() {
  isSubmitting.value = true;
  try {
    // submit form
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <LoadingButton
    label="Submit Form"
    :loading="isSubmitting"
    :disabled="isSubmitting"
    @click="handleSubmit"
  />
</template>
```

---

### SSO Buttons

Sign-in buttons with platform logos and loading states.

```typescript
<script setup lang="ts">
import { ref } from "vue";
import { GoogleSignInButton, FacebookSignInButton } from "@prefabs.tech/vue3-ui";

const isAuthenticating = ref(false);

async function handleGoogleSignIn() {
  isAuthenticating.value = true;
  try {
    // initialize Google Sign-In flow
  } finally {
    isAuthenticating.value = false;
  }
}

async function handleFacebookSignIn() {
  isAuthenticating.value = true;
  try {
    // initialize Facebook Sign-In flow
  } finally {
    isAuthenticating.value = false;
  }
}
</script>

<template>
  <div class="auth-container">
    <GoogleSignInButton
      title="Sign in with Google"
      :loading="isAuthenticating"
      @click="handleGoogleSignIn"
    />

    <FacebookSignInButton
      title="Sign in with Facebook"
      :loading="isAuthenticating"
      @click="handleFacebookSignIn"
    />

    <!-- Light variant -->
    <GoogleSignInButton
      title="Google"
      :base-button-options="{ variant: 'light' }"
      @click="handleGoogleSignIn"
    />

    <!-- Pill-shaped borders -->
    <FacebookSignInButton
      title="Facebook"
      :base-button-options="{ borderType: 'pill' }"
      @click="handleFacebookSignIn"
    />
  </div>
</template>
```

---

## Layout Components

### Card

Container component with optional header, body, and footer.

```typescript
<script setup lang="ts">
import { Card } from "@prefabs.tech/vue3-ui";
</script>

<template>
  <Card title="User Profile">
    <p>User information goes here</p>

    <template #footer>
      <button @click="handleSave">Save Changes</button>
    </template>
  </Card>

  <!-- Card with custom header -->
  <Card>
    <template #header>
      <div class="custom-header">
        <h2>Settings</h2>
        <span class="badge">3 changes</span>
      </div>
    </template>

    <!-- Content -->
    <form>
      <!-- form fields -->
    </form>

    <template #footer>
      <button>Apply</button>
    </template>
  </Card>
</template>
```

---

### Page

Full-page layout with title, subtitle, optional toolbar, and loading state. Toolbar is responsive (collapses to dropdown on small screens).

```typescript
<script setup lang="ts">
import { ref, computed } from "vue";
import { Page } from "@prefabs.tech/vue3-ui";

const isLoading = ref(false);
const itemCount = ref(42);

const toolbarActions = computed(() => [
  { label: "Export", icon: "icon-download", severity: "primary" },
  { label: "Archive", icon: "icon-archive", severity: "warning" },
  {
    label: "Delete",
    icon: "icon-trash",
    severity: "danger",
    display: itemCount.value > 0,
  },
]);

function handleAction(action: { label?: string }) {
  console.log("Action clicked:", action.label);
}
</script>

<template>
  <Page
    title="Items List"
    subtitle="Manage your items"
    title-element="h1"
    :title-tag="`${itemCount} items`"
    :loading="isLoading"
    :toolbar-actions-menu="toolbarActions"
    @action:click="handleAction"
  >
    <!-- Page content -->
    <div class="items-grid">
      <!-- items -->
    </div>
  </Page>
</template>
```

---

### Modal & ConfirmationModal

Dialog components with customizable content, close button, and optional dismiss-on-click-outside.

```typescript
<script setup lang="ts">
import { ref } from "vue";
import { Modal, ConfirmationModal } from "@prefabs.tech/vue3-ui";

const showModal = ref(false);
const showConfirmation = ref(false);

function handleConfirm() {
  console.log("Confirmed!");
  showConfirmation.value = false;
}

function handleCancel() {
  showConfirmation.value = false;
}
</script>

<template>
  <!-- Basic modal -->
  <Modal
    title="Settings"
    :show="showModal"
    @on:close="showModal = false"
  >
    <p>Configure your preferences here.</p>

    <template #footer>
      <button @click="showModal = false">Close</button>
    </template>
  </Modal>

  <!-- Confirmation modal -->
  <ConfirmationModal
    title="Delete Item?"
    :show="showConfirmation"
    :dismiss-on-click-out="false"
    size="medium"
    @on:close="handleCancel"
  >
    <p>This action cannot be undone. Are you sure?</p>

    <template #footer>
      <button @click="handleCancel">Cancel</button>
      <button @click="handleConfirm">Delete</button>
    </template>
  </ConfirmationModal>

  <button @click="showModal = true">Open Modal</button>
  <button @click="showConfirmation = true">Confirm Delete</button>
</template>
```

---

## Tab Navigation

### TabView

Advanced tab component with lazy loading, persistence, hash routing, and interception hooks.

```typescript
<script setup lang="ts">
import { ref, computed } from "vue";
import { TabView } from "@prefabs.tech/vue3-ui";
import type { Tab } from "@prefabs.tech/vue3-ui";

const activeTab = ref("profile");
const visibleTabs = ref(["profile", "settings", "activity"]);

const tabs = computed<Tab[]>(() => [
  {
    key: "profile",
    label: "Profile",
    icon: "icon-user",
    closable: false,
    children: "Profile content here",
  },
  {
    key: "settings",
    label: "Settings",
    icon: "icon-cog",
    closable: true,
  },
  {
    key: "activity",
    label: "Activity",
    icon: "icon-activity",
    closable: true,
  },
  {
    key: "notifications",
    label: "Notifications",
    icon: "icon-bell",
    closable: false,
    display: false, // hidden tab
  },
]);

function handleTabChange(newKey: string) {
  console.log("Tab changed to:", newKey);
  activeTab.value = newKey;
}

function handleBeforeTabClose(key: string) {
  if (key === "settings" && hasUnsavedChanges()) {
    console.warn("Cannot close settings with unsaved changes");
  }
}

function hasUnsavedChanges(): boolean {
  return false; // implement actual logic
}
</script>

<template>
  <TabView
    id="main-tabs"
    v-model:active-key="activeTab"
    v-model:visible-tabs="visibleTabs"
    :tabs="tabs"
    position="top"
    :lazy="true"
    :persist-state="true"
    persist-state-storage="localStorage"
    :enable-hash-routing="true"
    :intercept-tab-close="true"
    @before-tab-close="handleBeforeTabClose"
    @update:active-key="handleTabChange"
  >
    <!-- Template slots for dynamic content -->
    <template #profile>
      <div class="tab-content">
        <h3>User Profile</h3>
        <p>Profile information...</p>
      </div>
    </template>

    <template #settings>
      <div class="tab-content">
        <h3>Settings</h3>
        <form>
          <!-- settings form -->
        </form>
      </div>
    </template>

    <template #activity>
      <div class="tab-content">
        <h3>Activity Log</h3>
        <ul>
          <!-- activity items -->
        </ul>
      </div>
    </template>
  </TabView>
</template>
```

**Features:**

- **Lazy Loading** — Content only rendered when tab is active
- **Persistence** — Active tab saved to localStorage/sessionStorage
- **Hash Routing** — Tabs selectable via URL hash (e.g., #settings)
- **Tab Closing** — Users can close tabs with optional interception
- **Dynamic Visibility** — Show/hide tabs without removing them from definition

---

## Step-Based Flows

### Stepper

Multi-step form/wizard component supporting horizontal and vertical layouts.

```typescript
<script setup lang="ts">
import { ref } from "vue";
import { Stepper } from "@prefabs.tech/vue3-ui";

const activeStep = ref(0);
const formData = ref({ name: "", email: "", country: "" });

const steps = [
  { step: 1, label: "Personal Info", subtitle: "Your basic information", completedStepIcon: "icon-check", content: true },
  { step: 2, label: "Contact Details", subtitle: "How can we reach you?", content: true },
  { step: 3, label: "Confirmation", subtitle: "Review and confirm", content: true },
];

const nextButtonProps = { label: "Next", size: "large", severity: "primary" };
const prevButtonProps = { label: "Back", size: "large", variant: "outlined" };

function handleStepperComplete() {
  console.log("Wizard completed!");
  console.log("Form data:", formData.value);
}
</script>

<template>
  <Stepper
    v-model:active-index="activeStep"
    :steps="steps"
    direction="horizontal"
    align="center"
    :next-button-properties="nextButtonProps"
    :previous-button-properties="prevButtonProps"
    @complete="handleStepperComplete"
  >
    <template #1>
      <input v-model="formData.name" type="text" placeholder="Full name" />
      <input v-model="formData.email" type="email" placeholder="Email address" />
    </template>

    <template #2>
      <select v-model="formData.country">
        <option value="">Choose a country...</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
      </select>
    </template>

    <template #3>
      <p><strong>Name:</strong> {{ formData.name }}</p>
      <p><strong>Email:</strong> {{ formData.email }}</p>
      <p><strong>Country:</strong> {{ formData.country }}</p>
    </template>
  </Stepper>
</template>
```

---

## Lists & Grids

### SortableList

Draggable, reorderable list with optional custom rendering.

```typescript
<script setup lang="ts">
import { ref } from "vue";
import { SortableList } from "@prefabs.tech/vue3-ui";
import type { VNode } from "vue";

interface ListItem {
  id: number | string;
  data: string | Record<string, unknown>;
  render?: (data: unknown) => VNode;
}

const items = ref<ListItem[]>([
  { id: 1, data: "Learn Vue 3" },
  { id: 2, data: "Build components" },
  { id: 3, data: "Deploy to production" },
]);

function handleDrag(updatedList: ListItem[]) {
  console.log("Items reordered:", updatedList);
  items.value = updatedList;
}

// Custom render function for complex items
function renderComplexItem(data: Record<string, unknown>): VNode {
  return (
    <div class="list-item">
      <span class="priority" style={`color: ${data.priority}`}>
        {data.priority}
      </span>
      <span class="title">{data.title}</span>
      <span class="date">{data.dueDate}</span>
    </div>
  );
}
</script>

<template>
  <!-- Simple text list -->
  <SortableList :list="items" @on-drag="handleDrag" />

  <!-- Complex items with custom rendering -->
  <SortableList :list="complexItems" @on-drag="handleComplexDrag" />
</template>
```

---

### TabbedPanel

Slot-based tab panel. Each default slot child must have a `title` prop to be rendered as a tab. Tab selection is managed internally; use `defaultIndex` to set the initial active tab.

```typescript
<script setup lang="ts">
import { TabbedPanel } from "@prefabs.tech/vue3-ui";
</script>

<template>
  <TabbedPanel :default-index="0" position="top">
    <div title="Overview">
      <p>Overview content here.</p>
    </div>
    <div title="Details">
      <p>Details content here.</p>
    </div>
    <div title="History">
      <p>History content here.</p>
    </div>
  </TabbedPanel>
</template>
```

Use a custom icon per tab via the `icon` named slot:

```typescript
<template>
  <TabbedPanel>
    <div title="Users">
      <template #icon="slot">
        <img src="/icons/users.svg" :alt="slot.props?.title" class="icon" />
      </template>
      <!-- tab content -->
    </div>
  </TabbedPanel>
</template>
```

> **TabbedPanel vs TabView:** Use `TabbedPanel` when content is known at compile time and you want a simple slot-based API with no persistence or routing. Use `TabView` when you need data-driven tabs, lazy loading, persistence, hash routing, or interceptors.

---

## Utility Functions

### Date & Time Formatting

```typescript
<script setup lang="ts">
import { formatDate, formatDateTime, formatDuration } from "@prefabs.tech/vue3-ui";

// Format a date
const dateString = formatDate(new Date()); // "Jan 1, 2025"
const customDate = formatDate(1640988000000, "fr-FR"); // Format in French

// Format date and time
const dateTime = formatDateTime(new Date()); // "Jan 1, 2025, 2:30 PM"
const customDateTime = formatDateTime(
  new Date(),
  "de-DE",
  { hour: "2-digit", minute: "2-digit" }
); // "de-DE" format

// Format duration in seconds
const duration = formatDuration(90); // "1:30"
const duration2 = formatDuration(3661); // "61:01"
</script>

<template>
  <div>
    <p>Created: {{ formatDate(createdAt) }}</p>
    <p>Last Updated: {{ formatDateTime(updatedAt) }}</p>
    <p>Duration: {{ formatDuration(totalSeconds) }}</p>
  </div>
</template>
```

---

### Debounced Values

```typescript
<script setup lang="ts">
import { ref, watch } from "vue";
import { useDebouncedValue } from "@prefabs.tech/vue3-ui";

const searchQuery = ref("");
const debouncedQuery = ref("");

// Debounce search input by 500ms
watch(
  () => searchQuery.value,
  async (newValue) => {
    const result = await useDebouncedValue(newValue, 500);
    debouncedQuery.value = result.value;
    console.log("Search:", debouncedQuery.value);
  }
);
</script>

<template>
  <input
    v-model="searchQuery"
    type="text"
    placeholder="Search (debounced)..."
  />
  <p>Searching for: {{ debouncedQuery }}</p>
</template>
```

---

### Overlay Positioning

```typescript
<script setup lang="ts">
import { ref } from "vue";
import { getBestPosition } from "@prefabs.tech/vue3-ui";

const triggerElement = ref<HTMLElement>();

function showOverlay() {
  if (triggerElement.value) {
    const rect = triggerElement.value.getBoundingClientRect();
    const bestPosition = getBestPosition(rect);
    console.log("Best position for overlay:", bestPosition); // "top" | "bottom" | "left" | "right"
  }
}
</script>

<template>
  <button ref="triggerElement" @click="showOverlay">
    Show Overlay
  </button>
</template>
```

---

### Scrollable Parent Detection

```typescript
<script setup lang="ts">
import { ref } from "vue";
import { getScrollableParents } from "@prefabs.tech/vue3-ui";

const content = ref<HTMLElement>();

function findScrollContainers() {
  if (content.value) {
    const scrollableParents = getScrollableParents(content.value);
    console.log("Scrollable parent count:", scrollableParents.length);
    // Useful for fixing positioned overlays and managing scroll events
  }
}
</script>

<template>
  <div ref="content" @mounted="findScrollContainers">
    <!-- content -->
  </div>
</template>
```

---

### Storage Access

```typescript
<script setup lang="ts">
import { ref } from "vue";
import { getStorage } from "@prefabs.tech/vue3-ui";

const preference = ref("light");

function savePreference() {
  const storage = getStorage("localStorage");
  storage.setItem("theme-preference", preference.value);
}

function loadPreference() {
  const storage = getStorage("localStorage");
  preference.value = storage.getItem("theme-preference") || "light";
}
</script>

<template>
  <select v-model="preference" @change="savePreference">
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
  <button @click="loadPreference">Load Preference</button>
</template>
```

---

## Type Safety

All components and utilities export TypeScript types for full type safety:

```typescript
import type {
  DropdownMenu,
  Error,
  Tab,
  FileMessages,
  IFile,
  TableMessages,
} from "@prefabs.tech/vue3-ui";

const menuItem: DropdownMenu = {
  label: "Export",
  icon: "icon-download",
  severity: "primary",
};

const error: Error = {
  code: "VALIDATION_ERROR",
  message: "Email is required",
};

const tab: Tab = {
  key: "profile",
  label: "Profile",
  closable: false,
};

const file: IFile = {
  id: 1,
  originalFileName: "document.pdf",
  uploadedAt: Date.now(),
  uploadedBy: { name: "John Doe", id: "user-123" },
};
```

---

## Use Cases

### Complete Admin Dashboard

```typescript
<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Page,
  Card,
  ButtonElement,
  TabView,
  Modal,
  LoadingButton,
} from "@prefabs.tech/vue3-ui";
import type { Tab } from "@prefabs.tech/vue3-ui";

const isLoading = ref(false);
const showDeleteModal = ref(false);
const selectedUsers = ref(0);
const activeTab = ref("users");

const toolbarActions = computed(() => [
  { label: "Export", icon: "icon-download", severity: "primary", display: selectedUsers.value > 0 },
  { label: "Delete", icon: "icon-trash", severity: "danger", display: selectedUsers.value > 0 },
]);

const tabs: Tab[] = [
  {
    key: "users",
    label: "Users",
    icon: "icon-users",
    closable: false,
  },
  {
    key: "roles",
    label: "Roles",
    icon: "icon-shield",
    closable: false,
  },
  {
    key: "logs",
    label: "Activity Logs",
    icon: "icon-activity",
    closable: false,
  },
];

function handleAction(action: { label?: string }) {
  if (action.label === "Delete") {
    showDeleteModal.value = true;
  } else if (action.label === "Export") {
    handleExport();
  }
}

async function handleExport() {
  isLoading.value = true;
  try {
    // export logic
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <Page
    title="Admin Dashboard"
    subtitle="Manage users and permissions"
    :loading="isLoading"
    :toolbar-actions-menu="toolbarActions"
    @action:click="handleAction"
  >
    <TabView
      v-model:active-key="activeTab"
      :tabs="tabs"
      :persist-state="true"
      id="admin-tabs"
    >
      <template #users>
        <Card title="Users List">
          <!-- User management content -->
        </Card>
      </template>

      <template #roles>
        <Card title="Role Management">
          <!-- Role management content -->
        </Card>
      </template>

      <template #logs>
        <Card title="Activity Logs">
          <!-- Activity logs content -->
        </Card>
      </template>
    </TabView>
  </Page>

  <Modal
    title="Confirm Delete"
    :show="showDeleteModal"
    @on:close="showDeleteModal = false"
  >
    <p>Delete {{ selectedUsers }} selected users?</p>
    <template #footer>
      <button @click="showDeleteModal = false">Cancel</button>
      <LoadingButton
        label="Delete"
        :loading="isLoading"
        @click="handleExport"
      />
    </template>
  </Modal>
</template>
```

### Multi-Step Registration Form

```typescript
<script setup lang="ts">
import { ref } from "vue";
import { Stepper } from "@prefabs.tech/vue3-ui";

const currentStep = ref(0);
const formData = ref({
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  acceptTerms: false,
});

const steps = [
  { step: 1, label: "Account", subtitle: "Email and password", content: true },
  { step: 2, label: "Profile", subtitle: "Your name", content: true },
  { step: 3, label: "Consent", subtitle: "Agree to terms", content: true },
];

async function handleComplete() {
  console.log("Registration complete:", formData.value);
  // submit form
}

const isStepValid = (): boolean => {
  switch (currentStep.value) {
    case 0:
      return formData.value.email && formData.value.password;
    case 1:
      return formData.value.firstName && formData.value.lastName;
    case 2:
      return formData.value.acceptTerms;
    default:
      return true;
  }
};
</script>

<template>
  <Stepper
    v-model:active-index="currentStep"
    :steps="steps"
    direction="vertical"
    align="center"
    @complete="handleComplete"
  >
    <template #1>
      <input v-model="formData.email" type="email" placeholder="Email" />
      <input v-model="formData.password" type="password" placeholder="Password" />
    </template>

    <template #2>
      <input v-model="formData.firstName" type="text" placeholder="First Name" />
      <input v-model="formData.lastName" type="text" placeholder="Last Name" />
    </template>

    <template #3>
      <label>
        <input v-model="formData.acceptTerms" type="checkbox" />
        I agree to the terms and conditions
      </label>
    </template>
  </Stepper>
</template>
```
