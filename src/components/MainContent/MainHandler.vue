<script>
import HeroSection from "./sections/HeroSection.vue";
import OurProducts from "./sections/OurProducts.vue";
import CorporateAndWeddings from "./sections/CorporateAndWeddings.vue";

export default {
  data() {
    return {};
  },
  components: {
    HeroSection,
    OurProducts,
    CorporateAndWeddings,
  },
};
</script>

<template>
  <main>
    <HeroSection />
    <OurProducts />
    <CorporateAndWeddings />
  </main>
</template>
