<script>
import HeroSection from "./sections/HeroSection.vue";
import OurProducts from "./sections/OurProducts.vue";
import CorporateAndWeddings from "./sections/CorporateAndWeddings.vue";
import BackingSpecialMoments from "./sections/BackingSpecialMoments.vue";
import AllOurProducts from "./sections/AllOurProducts.vue";

export default {
  data() {
    return {};
  },
  components: {
    HeroSection,
    OurProducts,
    CorporateAndWeddings,
    BackingSpecialMoments,
    AllOurProducts,
  },
};
</script>

<template>
  <main>
    <HeroSection />
    <OurProducts />
    <CorporateAndWeddings />
    <BackingSpecialMoments />
    <AllOurProducts />
  </main>
</template>
