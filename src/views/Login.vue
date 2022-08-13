<template>
  <div class="w-full h-full">
    <div class="w-[45rem] h-96 m-auto mt-20">
      <p class="text-left font-bold text-xl">
        Welcome to the weather forecast web application. Please login with your
        Github user to use the application and view the weather in your city
      </p>
      {{ user }}
      <btn :text="'Login'" class="block mt-10" @onClick="login"></btn>
    </div>
  </div>
</template>
<script>
import Btn from "@/components/Btn.vue";

export default {
  components: { Btn },
  data() {
    return {
      user: this.$auth0.user,
    };
  },
  methods: {
    login() {
      this.$auth0.loginWithRedirect();
    },
  },
};
</script>
