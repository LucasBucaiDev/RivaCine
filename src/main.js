//import './assets/main.css'

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.js";
import cors from "cors";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(bootstrap);
app.use(cors);

app.mount("#app");
