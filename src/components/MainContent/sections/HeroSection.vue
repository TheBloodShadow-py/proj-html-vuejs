<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <img draggable="false" class="absolute top-0 left-0 z-[-1] object-cover h-[800px] w-full" src="/hero-header-bakery.jpg" alt="hero-img" />
  <section class="py-4 px-8">
    <div class="container my-0 mx-auto transition-all duration-150">
      <div class="flex flex-col gap-6 items-start">
        <span class="other-font uppercase text-xs">Fresh & tasty bakery every day</span>
        <h1 class="text-brand select-text text-4xl font-bold max-w-[400px]">The Perfect Fresh Bread</h1>
        <p class="select-text max-w-[430px] mb-5">
          Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Aliquam erat volutpat. Nullam quis sagittis nibh ac nulla id orci tempor
        </p>
        <button
          class="text-brand bg-white py-3 hover:bg-brand hover:text-white transition-colors duration-300 px-6 text-sm font-semibold rounded-md drop-shadow-lg"
        >
          Explore our products
        </button>
      </div>
    </div>
  </section>
</template>
