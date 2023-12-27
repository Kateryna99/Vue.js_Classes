import { createApp } from "vue";
import App from "./App.vue";
import store from "../../lesson17.1/src/store";
import i18n from "../../lesson17.1/src/plugins/i18n";
import "../../lesson17.1/src/assets/style/icomoon/icons.css";

createApp(App).use(store).use(i18n).mount("#app");
