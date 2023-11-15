import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faCartShopping);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
