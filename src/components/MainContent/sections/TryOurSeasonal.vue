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
  <section>
    <figure class="relative drop-shadow-md">
      <img draggable="false" class="h-[515px] drop-shadow-md object-cover" src="/call-to-action-bg.jpg" />
      <div class="flex flex-col gap-6 absolute top-28 left-24 md:top-28 md:left-44 items-start">
        <span class="uppercase text-xs other-font">Try our seasonal products</span>
        <h2 class="text-white select-text text-xl md:text-4xl font-bold lg:max-w-[590px] mb-7">Order for pick-up or delivery to your home</h2>
        <Button :isLightButton="true" :buttonText="'Shop Now'" />
      </div>
    </figure>
  </section>
</template>
