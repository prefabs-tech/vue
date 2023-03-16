<template>
  <div class="table">
    <EasyDataTable
      buttons-pagination
      :headers="headers"
      :hide-footer="true"
      :items="items"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "EasyTable",
};
</script>

<script setup lang="ts">
import EasyDataTable from "vue3-easy-data-table";

import type { Header, Item } from "vue3-easy-data-table";

const headers: Header[] = [
  { sortable: true, text: "PLAYER", value: "name" },
  { text: "COUNTRY", value: "country" },
  { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
  { text: "NUMBER", value: "number" },
  { text: "POSITION", value: "position" },
  { text: "TEAM", value: "team" },
];

const items: Item[] = [
  {
    name: "Stephen Curry",
    country: "USA",
    lastAttended: "Davidson",
    number: 30,
    position: "G",
    team: "GSW",
  },
  {
    name: "Lebron James",
    country: "USA",
    lastAttended: "St. Vincent-St. Mary HS (OH)",
    number: 6,
    position: "F",
    team: "LAL",
  },
  {
    name: "Kevin Durant",
    country: "USA",
    lastAttended: "Texas-Austin",
    number: 7,
    position: "F",
    team: "BKN",
  },
  {
    name: "Giannis Antetokounmpo",
    country: "Greece",
    lastAttended: "Filathlitikos",
    number: 34,
    position: "F",
    team: "MIL",
  },
];
</script>
