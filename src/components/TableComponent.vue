<template>
  <div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left border-2 border-black">
      <thead class="text-xs text-gray-700 bg-gray-50">
        <tr>
          <th
            scope="col"
            class="py-3 px-3 border-r-2 border-black"
            v-for="th in tableHeaders"
            :key="th"
          >
            {{ th }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="td in tableData" :key="td">
          <td class="py-4 px-3 border-r-2 border-black">{{ td.date }}</td>
          <td class="py-4 px-3 border-r-2 border-black">
            {{ td.temperature }}
          </td>
          <td class="py-4 px-3 border-r-2 border-black">
            {{ td.description }}
          </td>
          <td class="py-4 px-3 border-r-2 border-black">{{ td.main }}</td>
          <td class="py-4 px-3 border-r-2 border-black">{{ td.pressure }}</td>
          <td class="py-4 px-3 border-r-2 border-black">{{ td.humidity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["tableHeaders", "tableData"],
};
</script>

<style></style>
