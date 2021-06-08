import { createApp } from "vue";
import PhosphorVue from "phosphor-vue";
import App from "./App.vue";
import router from "./router";
import "./assets/global.css";

// const app = createApp(App);
// app.use(PhosphorVue);
createApp(App).use(PhosphorVue).use(router).mount("#app");
