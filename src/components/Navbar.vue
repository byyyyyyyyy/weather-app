<template>
  <nav class="bg-white border-y border-black px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a class="flex items-center">
        <Icon icon="fluent:weather-cloudy-20-filled" width="40" height="40" />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap hidden sm:block"
          >Weather Forecast</span
        >
      </a>
      <btn :text="'Logout'" @onClick="logout"></btn>
    </div>
  </nav>
</template>
<script>
import Btn from "./Btn.vue";
export default {
  components: { Btn },
  methods: {
    logout() {
      this.$auth0.logout({ returnTo: window.location.origin });
    },
  },
};
</script>
