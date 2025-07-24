# TabbedPanel component

## Installation

### npm

```
npm install @prefabs.tech/vue3-ui
```

### yarn

```
yarn add @prefabs.tech/vue3-ui
```

### pnpm

```
pnpm add @prefabs.tech/vue3-ui
```

## Usage

```
<template>
  <TabbedPanel>
    <SubPane
      icon="icon1.jpg"
      title="Topic 1">
      Pane 1 content
    </SubPane>
    <SubPane
      icon="icon2.jpg"
      title="Topic 2">
      Pane 2content
    </SubPane>
  </TabbedPanel>
</template>

<script set lang="ts">
import { SubPane, TabbedPanel } from "@prefabs.tech/vue3-ui";
</script>
```

## Props

### Accordion

| Prop     | Type                                   | Description                                           | Default | Required |
| -------- | -------------------------------------- | ----------------------------------------------------- | ------- | -------- |
| position | `top` \| `left` \| `bottom` \| `right` | The position of the tabs relative to the tabbed pane. | `top`   | No       |

### SubPane

| Prop  | Type     | Description                                     | Default | Required |
| ----- | -------- | ----------------------------------------------- | ------- | -------- |
| icon  | `string` | The icon to display in the subpane's title area | None    | No       |
| title | `string` | The text to display in the subpan'es title area | None    | Yes      |
