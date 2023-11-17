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
  <section class="px-8 pb-[160px]">
    <div class="container my-0 mx-auto transition-all duration-150">
      <div class="flex flex-col items-center gap-6 mb-8">
        <span class="other-font uppercase text-xs text-center">Locations</span>
        <h2 class="text-brand text-center select-text text-3xl font-bold max-w-[490px] md:max-w-[700px] lg:max-w-[490px] mb-7">Visit our Backeries</h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-5">
        <div class="flex flex-col">
          <img class="drop-shadow-md rounded-t" draggable="false" src="/new-york-bk-1200x794.jpg" />
          <div class="flex flex-col bg-[#f1f9fb] px-12 py-8 pt-0 rounded-b">
            <div class="flex my-10 items-center justify-center">
              <h2 class="text-brand text-center select-text text-3xl font-bold max-w-[490px] md:max-w-[700px] lg:max-w-[490px]">New York</h2>
            </div>
            <ul class="flex justify-between items-center">
              <li class="flex flex-col items-center gap-3 text-center">
                <span class="uppercase other-font text-xs">Call us</span>
                <span class="text-xs other-font">1.800.458.556</span>
              </li>
              <li class="flex flex-col gap-3 text-center">
                <span class="uppercase other-font text-xs">Open all week</span>
                <span class="text-xs other-font">9:00 AM - 6:00 PM</span>
              </li>
              <li class="flex flex-col gap-3 text-center">
                <Button :buttonText="'View Map'" :isLightButton="true" />
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col">
          <img class="drop-shadow-md rounded-t" draggable="false" src="/london-bk-1200x794.jpg" />
          <div class="flex flex-col bg-[#faf3e3] px-12 py-8 pt-0 rounded-b">
            <div class="flex my-10 items-center justify-center">
              <h2 class="text-brand text-center select-text text-3xl font-bold max-w-[490px] md:max-w-[700px] lg:max-w-[490px]">London</h2>
            </div>
            <ul class="flex justify-between items-center">
              <li class="flex flex-col items-center gap-3 text-center">
                <span class="uppercase other-font text-xs">Call us</span>
                <span class="text-xs other-font">1.800.458.556</span>
              </li>
              <li class="flex flex-col gap-3 text-center">
                <span class="uppercase other-font text-xs">Open all week</span>
                <span class="text-xs other-font">9:00 AM - 6:00 PM</span>
              </li>
              <li class="flex flex-col gap-3 text-center">
                <Button :buttonText="'View Map'" :isLightButton="true" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
