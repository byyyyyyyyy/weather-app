<template>
  <div class="w-full h-full">
    <div class="md:w-[45rem] h-96 m-auto mt-20 px-5">
      <p class="text-left font-bold text-xl">
        Welcome to the weather forecast web application. Please login with your
        Github user to use the application and view the weather in your city
      </p>
      <btn :text="'Login'" class="block mt-10" @onClick="login"></btn>
    </div>
  </div>
</template>
<script>
import Btn from "@/components/Btn.vue";

export default {
  components: { Btn },
  methods: {
    login() {
      this.$auth0.loginWithRedirect();
    },
  },
};
</script>
