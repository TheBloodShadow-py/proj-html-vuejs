<script>
import NavBar from "./components/NavBar.vue";
import MainHandler from "./components/MainContent/MainHandler.vue";
import Footer from "./components/Footer.vue";

import { store } from "./store";

export default {
  components: {
    NavBar,
    MainHandler,
    Footer,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <NavBar :logo="store.logoSrc" :navElements="store.navElements" />
  <MainHandler />
  <Footer />
</template>
