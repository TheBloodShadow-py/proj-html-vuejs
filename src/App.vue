<script>
import NavBar from "./components/NavBar.vue";
import MainHandler from "./components/MainContent/MainHandler.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    MainHandler,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <NavBar />
  <MainHandler />
  <Footer />
</template>
