<template>
  <div class="w-full h-full">
    <div class="md:w-[45rem] p-5 h-96 m-auto mt-20">
      <table-component :tableHeaders="tableHeaders" :tableData="tableData" />
      <p class="text-red-500 capitalize font-bold mt-5">{{ getError }}</p>
      <div class="flex justify-end mt-20">
        <btn :text="'Back'" @onClick="onBack" />
      </div>
    </div>
  </div>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";
import Btn from "@/components/Btn.vue";
import { mapGetters, mapActions } from "vuex";
import moment from "moment";

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
      tableData: [],
    };
  },
  computed: {
    ...mapGetters(["getWeather", "getError"]),
  },
  async mounted() {
    const city = this.$route.query.city;
    if (city) await this.fetchWeather(city);
    const cityWeather = JSON.parse(JSON.stringify(this.getWeather));
    this.tableData.push([
      moment.unix(cityWeather.dt).format("MM/DD/YYYY"),
      cityWeather.main.temp,
      cityWeather.weather[0].description,
      cityWeather.weather[0].main,
      cityWeather.main.pressure,
      cityWeather.main.humidity,
    ]);
  },
  methods: {
    ...mapActions(["fetchWeather"]),
    onBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
