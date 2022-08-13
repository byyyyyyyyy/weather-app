import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
export default createStore({
  state: {
    user: null,
    weather: null,
    isAuthenticated: false,
    error: null,
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    getWeather: (state) => state.weather,
    getUser: (state) => state.user,
    getError: (state) => state.error,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setWeather(state, weather) {
      state.weather = weather;
    },
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchWeather({ commit, dispatch }, city) {
      commit("setError", null);
      try {
        const result = await axios.get(
          `/weather?q=${city}&appid=${process.env.VUE_APP_WEATHER_API_KEY}`
        );
        commit("setWeather", result.data);
        router.replace({ name: "weather", query: { city } });
      } catch (error) {
        commit("setError", error.response.data.message);
      }
    },
  },
});
