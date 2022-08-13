<template>
  <div class="w-full h-full">
    <div class="w-[45rem] h-96 m-auto mt-20">
      <p class="text-center font-bold text-xl">John Smith</p>
      <p class="text-center font text-xl">https://github.com/byyyyyyyyy</p>
      <div class="flex flex-col w-full items-center">
        <label
          class="relative text-gray-400 focus-within:text-gray-600 block mt-10"
        >
          <Icon
            icon="ant-design:search-outlined"
            class="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
          />

          <input
            type="text"
            placeholder="City"
            class="border border-gray-900 py-1 px-4 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none rounded-full"
          />
        </label>

        <btn :text="'Display Weather'" class="mt-5" @onClick="login"></btn>
      </div>
    </div>
  </div>
</template>
<script>
import Btn from "@/components/Btn.vue";
export default {
  components: { Btn },
  methods: {
    login() {
      alert("logged out");
    },
  },
};
</script>
