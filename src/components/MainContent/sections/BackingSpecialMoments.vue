<script>
import Button from "../../utility/Button.vue";

export default {
  components: { Button },
  data() {
    return {};
  },
};
</script>

<template>
  <section class="px-8 pb-[160px]">
    <div class="container my-0 mx-auto transition-all duration-150">
      <div class="flex flex-col items-center gap-6">
        <span class="other-font uppercase text-xs text-center">Corporate & Weddings</span>
        <h2 class="text-brand text-center select-text text-3xl font-bold max-w-[490px] md:max-w-[700px] lg:max-w-[490px] mb-7">Backing Special Moments</h2>
      </div>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap:12 grid-rows-1 xl:gap-20">
        <figure class="rounded drop-shadow-md relative">
          <img draggable="false" class="rounded drop-shadow-md" src="/corporate-bg.jpg" />
          <div class="hover flex absolute top-[50%] left-[50%]">
            <div class="flex flex-col items-center text-center">
              <span class="other-font uppercase text-xs text-white">Private dining hall</span>
              <h2 class="text-white select-text text-3xl font-bold max-w-[490px] md:max-w-[700px] lg:max-w-[490px] mb-7">Weddings & Parties</h2>
              <Button :isLightButton="false" :buttonText="'Explore more'" />
            </div>
          </div>
        </figure>
        <figure class="rounded drop-shadow-md relative cursor-pointer">
          <img draggable="false" class="rounded drop-shadow-md" src="/wedding-bg.jpg" />
          <div class="hover flex absolute top-[50%] left-[50%]">
            <div class="flex flex-col items-center text-center">
              <span class="other-font uppercase text-xs text-white">International bakery</span>
              <h2 class="text-white select-text text-3xl font-bold max-w-[490px] md:max-w-[700px] lg:max-w-[490px] mb-7">Corporate Events</h2>
              <Button :isLightButton="false" :buttonText="'Explore more'" />
            </div>
          </div>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hover {
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all linear 0.2s;
}

figure:hover .hover {
  opacity: 100;
}
</style>
