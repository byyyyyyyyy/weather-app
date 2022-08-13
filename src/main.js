import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import { Icon } from "@iconify/vue";
import { createAuth0 } from "@auth0/auth0-vue";

const app = createApp(App);

app
  .use(
    createAuth0({
      domain: "dev-cci9kch9.us.auth0.com",
      client_id: "qoYjwflEV3Epy1N0kN3ty8N2DErmqJsx",
      redirect_uri: window.location.origin,
    })
  )
  .use(store)
  .use(router)
  .component("Icon", Icon);

app.mount("#app");
