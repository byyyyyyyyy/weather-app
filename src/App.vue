<template>
  <div class="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    Navbar,
  },
  beforeMount() {
    if (!this.$auth0.isAuthenticated) {
      this.$router.push("/login");
    }
  },
  mounted() {
    this.setAuthentication(this.$auth0.isAuthenticated);
    this.setUser(this.$auth0.user);
  },
  methods: {
    ...mapMutations(["setUser", "setAuthentication"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
