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
      <div class="grid lg:grid-cols-4 lg:grid-rows-2 gap-8">
        <img class="rounded drop-shadow-md hidden lg:block" draggable="false" src="/social-1.jpg" />
        <div class="col-span-2 rounded drop-shadow-md flex items-center justify-center bg-[#f1eef5]">
          <div class="flex flex-col gap-4 text-center items-center p-12 lg:p-0">
            <span class="other-font text-xs uppercase">Made for sharing</span>
            <h2 class="text-brand select-text text-3xl font-bold max-w-[490px] md:max-w-[700px] lg:max-w-[490px] mb-7">Let's stay in touch</h2>
            <Button :buttonText="'Follow Us'" :isLightButton="false" />
          </div>
        </div>
        <img class="rounded drop-shadow-md hidden lg:block" draggable="false" src="/social-2.jpg" />
        <img class="rounded drop-shadow-md hidden lg:block" draggable="false" src="/social-3.jpg" />
        <img class="rounded drop-shadow-md hidden lg:block" draggable="false" src="/social-4.jpg" />
        <img class="rounded drop-shadow-md hidden lg:block" draggable="false" src="/social-5.jpg" />
        <img class="rounded drop-shadow-md hidden lg:block" draggable="false" src="/social-6.jpg" />
      </div>
    </div>
  </section>
</template>
