<template>
  <nav class="bg-white border-y border-black px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a class="flex items-center">
        <Icon icon="fluent:weather-cloudy-20-filled" width="40" height="40" />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap"
          v-if="!isAuthenticated"
          >Weather Forecast</span
        >
      </a>
      <btn v-if="isAuthenticated" :text="'Logout'" @onClick="logout"></btn>
    </div>
  </nav>
</template>
<script>
import Btn from "./Btn.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { Btn },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapMutations(["logout"]),
    async logout() {
      this.$auth0.logout({ returnTo: `${window.location.origin}/login` });
    },
  },
};
</script>
