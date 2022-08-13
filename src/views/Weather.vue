<template>
  <div class="w-full h-full">
    <div class="w-[45rem] h-96 m-auto mt-20">
      <table-component :tableHeaders="tableHeaders" :tableData="tableData" />
      <div class="flex justify-end mt-20">
        <btn :text="'Back'" />
      </div>
    </div>
  </div>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";
import Btn from "@/components/Btn.vue";

export default {
  components: { TableComponent, Btn },
  data() {
    return {
      tableHeaders: [
        "Date (mm/dd/yyyy)",
        "Temp(F)",
        "Description",
        "Main",
        "Pressure",
        "Humidity",
      ],
      tableData: [
        {
          date: "09/01/2020",
          temperature: 75,
          description: "Sky is clear",
          main: "Clear",
          pressure: "1023.68",
          humidity: "100",
        },
      ],
    };
  },
};
</script>

<style></style>
