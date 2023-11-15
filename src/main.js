import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faBars);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
