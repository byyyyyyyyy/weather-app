import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import { Icon } from "@iconify/vue";
import { createAuth0 } from "@auth0/auth0-vue";
import axios from "axios";

//set base url for axios requests
axios.defaults.baseURL = process.env.VUE_APP_WEATHER_API_URL;

const app = createApp(App);

app
  .use(
    createAuth0({
      domain: process.env.VUE_APP_AUTH0_DOMAIN,
      client_id: process.env.VUE_APP_AUTH0_CLIENT_ID,
      redirect_uri: window.location.origin,
    })
  )
  .use(store)
  .use(router)
  .component("Icon", Icon);

app.mount("#app");
