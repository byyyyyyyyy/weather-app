<template>
  <div class="w-full h-full">
    <div class="md:w-[45rem] h-96 m-auto mt-20 p-5">
      <p class="text-center font-bold text-xl">{{ getUser.name }}</p>
      <p class="text-center font text-xl">
        https://github.com/{{ getUser.nickname }}
      </p>
      <div class="flex flex-col w-full items-center">
        <p class="text-red-500 capitalize font-bold mt-10">{{ getError }}</p>
        <label class="relative text-gray-400 focus-within:text-gray-600 block">
          <Icon
            icon="ant-design:search-outlined"
            class="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
          />

          <input
            type="text"
            placeholder="City"
            v-model="city"
            class="border border-gray-900 py-1 px-4 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none rounded-full"
          />
        </label>
        <btn
          :text="'Display Weather'"
          class="mt-5"
          @onClick="fetchWeather(city)"
        ></btn>
      </div>
    </div>
  </div>
</template>
<script>
import Btn from "@/components/Btn.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  components: { Btn },
  computed: {
    ...mapGetters(["getUser", "getError"]),
  },
  data() {
    return {
      city: "",
    };
  },
  mounted() {
    window.history.pushState({}, "", "/");
  },
  methods: {
    ...mapMutations(["setUser"]),
    ...mapActions(["fetchWeather"]),
    login() {
      alert("logged out");
    },
  },
};
</script>
