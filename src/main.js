import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faCartShopping, faChevronLeft, faChevronRight, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faXTwitter, faFacebookF, faPinterestP } from "@fortawesome/free-brands-svg-icons";
library.add(faBars, faCartShopping, faChevronLeft, faChevronRight, faInstagram, faXTwitter, faFacebookF, faPinterestP, faAngleUp);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
