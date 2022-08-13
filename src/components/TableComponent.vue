<template>
  <div class="relative">
    <table class="w-full text-sm text-left border-2 border-black">
      <thead class="text-xs text-gray-700 bg-gray-300">
        <tr>
          <th
            scope="col"
            class="py-3 px-3 border-r-2 border-black"
            :class="index > 1 ? 'sm:table-cell hidden' : ''"
            v-for="(th, index) in tableHeaders"
            :key="th"
          >
            {{ th }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="td in tableData" :key="td">
          <td
            class="py-4 px-3 border-r-2 border-black"
            v-for="(data, index) in td"
            :key="data"
            :class="index > 1 ? 'sm:table-cell hidden' : ''"
          >
            {{ data }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["tableHeaders", "tableData"],
  methods: {},
};
</script>

<style></style>
