<script>
import HeroSection from "./sections/HeroSection.vue";
import OurProducts from "./sections/OurProducts.vue";
import BackingSpecialMoments from "./sections/BackingSpecialMoments.vue";
import AllOurProducts from "./sections/AllOurProducts.vue";
import MiniHeroSection from "./sections/MiniHeroSection.vue";

export default {
  data() {
    return {};
  },
  components: {
    HeroSection,
    OurProducts,
    BackingSpecialMoments,
    AllOurProducts,
    MiniHeroSection,
  },
};
</script>

<template>
  <main>
    <HeroSection />
    <OurProducts />
    <BackingSpecialMoments />
    <AllOurProducts />
    <MiniHeroSection />
  </main>
</template>
