<script>
import NavBar from "./components/NavBar.vue";
import MainHandler from "./components/MainContent/MainHandler.vue";
import Footer from "./components/Footer.vue";
//
import PageLoader from "./components/utility/PageLoader.vue";
import ArrowResetPage from "./components/utility/ArrowResetPage.vue";
import CustomCursor from "./components/utility/CustomCursor.vue";

import { store } from "./store";

export default {
  components: {
    NavBar,
    MainHandler,
    Footer,
    PageLoader,
    ArrowResetPage,
    CustomCursor,
  },
  data() {
    return {
      store,
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
};
</script>

<template>
  <CustomCursor />
  <ArrowResetPage v-once />
  <Transition>
    <PageLoader v-if="loading" @wheel.prevent @touchmove.prevent @scroll.prevent />
  </Transition>
  <NavBar :logo="store.logoSrc" :navElements="store.navElements" />
  <MainHandler v-show="!loading" />
  <Footer />
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
