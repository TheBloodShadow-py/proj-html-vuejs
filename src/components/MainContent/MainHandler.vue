<script>
import HeroSection from "./sections/HeroSection.vue";
import OurProducts from "./sections/OurProducts.vue";
import BackingSpecialMoments from "./sections/BackingSpecialMoments.vue";
import AllOurProducts from "./sections/AllOurProducts.vue";
import MiniHeroSection from "./sections/MiniHeroSection.vue";
import VisitOurBakeries from "./sections/VisitOurBakeries.vue";
import LetStayInTouch from "./sections/LetStayInTouch.vue";
import TryOurSeasonal from "./sections/TryOurSeasonal.vue";

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
    VisitOurBakeries,
    LetStayInTouch,
    TryOurSeasonal,
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
    <VisitOurBakeries />
    <LetStayInTouch />
    <TryOurSeasonal />
  </main>
</template>
