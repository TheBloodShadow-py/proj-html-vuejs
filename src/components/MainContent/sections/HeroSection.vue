<script>
import Button from "../../utility/Button.vue";

export default {
  components: {
    Button,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <img draggable="false" class="drop-shadow-md absolute top-0 left-0 z-[-1] object-cover h-[800px] w-full" src="/hero-header-bakery.jpg" alt="hero-img" />
  <section class="py-4 px-8 mb-[210px]">
    <div class="container my-0 mx-auto transition-all duration-150">
      <div class="flex flex-col gap-6 items-start">
        <span class="other-font uppercase text-xs">Fresh & tasty bakery every day</span>
        <h1 class="text-brand select-text text-4xl font-bold max-w-[400px]">The Perfect Fresh Bread</h1>
        <p class="select-text max-w-[430px] mb-5">
          Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Aliquam erat volutpat. Nullam quis sagittis nibh ac nulla id orci tempor
        </p>
        <Button :isLightButton="true" :buttonText="'Explore our products'" />
      </div>
    </div>
  </section>
</template>
