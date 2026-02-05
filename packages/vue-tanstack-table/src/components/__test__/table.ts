import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from "@tanstack/vue-table";

export const mockedTable = useVueTable({
  columns: [
    {
      accessorKey: "name",
      enableColumnFilter: true,
      header: "Name",
    },
    {
      accessorKey: "age",
      header: "Age",
      tooltip: true,
    },
    {
      accessorKey: "country",
      header: "Country",
    },
  ],
  data: [
    {
      age: 30,
      country: "USA",
      name: "John Doe",
    },
    {
      age: 25,
      country: "Canada",
      name: "Jane Smith",
    },
    {
      age: 28,
      country: "UK",
      name: "Alice Johnson",
    },
  ],
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
});
