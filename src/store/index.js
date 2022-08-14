import { createStore } from "vuex";
import router from "@/router";
import api from "@/api/api";
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
    async fetchWeather({ commit }, city) {
      commit("setError", null);
      try {
        const result = await api.getWeather(city);
        commit("setWeather", result);
        router.replace({ name: "weather", query: { city } });
      } catch (error) {
        commit("setError", error.response.data.message);
      }
    },
  },
});
