<template>
  <TanstackTable :data="defaultData" :headers="headers" />
</template>

<script setup lang="ts">
import { TanstackTable } from "@dzangolab/vue3-tanstack-table";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  status: string;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    status: "In Relationship",
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    status: "Single",
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    status: "Complicated",
  },
];

// const headers = ["First Name", "Last Name", "Age", "Status"];
const headers = [
  {
    id: "firstName",
    header: "First Name",
    cell: "firstName",
  },
  {
    id: "lastName",
    header: "Last Name",
    cell: "lastName",
  },
  {
    id: "age",
    header: "Age",
    cell: "age",
  },
  {
    id: "status",
    header: "Status",
    cell: "status",
  },
];
</script>
