<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section class="px-8 pb-[160px]">
    <div class="container my-0 mx-auto transition-all duration-150">
      <figure class="relative mb-10 drop-shadow-md">
        <img draggable="false" class="drop-shadow-md rounded" alt="bakery process" src="/bakery-process-1.jpg" />
        <span class="absolute top-12 hidden md:block right-12 text-white text-7xl font-light z-10">01</span>
        <h2 class="absolute top-12 left-12 text-white text-xl lg:text-4xl max-w-[250px] lg:max-w-[500px] font-bold z-10">Tell us what you have in mind</h2>
        <div class="absolute hidden xl:flex bottom-12 right-12 z-10 flex-col gap-3">
          <h4 class="other font text-xs uppercase font-bold text-gray-300">Manual ingredients selection</h4>
          <p class="text-base font-semibold text-white max-w-[430px]">
            Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laoreet ex. Aliquam erat volutpat. Nullam quis sagittis nibh.
            Morbi consectetur ultricies ante ac congue. Donec lorem erat, finibus in velit placerat, rutrum augue.
          </p>
        </div>
      </figure>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        <figure class="relative drop-shadow-md">
          <img draggable="false" class="drop-shadow-md rounded" alt="bakery process 2" src="/bakery-process-2.jpg" />
          <span class="absolute bottom-12 xl:top-12 hidden md:block right-12 text-white text-7xl font-light z-10">02</span>
          <h2 class="absolute top-12 left-12 text-white text-xl lg:text-4xl max-w-[250px] lg:max-w-[500px] font-bold z-10">We Start Baking</h2>
          <div class="absolute hidden xl:flex bottom-12 left-12 z-10 flex-col gap-3">
            <h4 class="other font text-xs uppercase font-bold text-gray-300">Sweet & delicious</h4>
            <p class="text-base font-semibold text-white max-w-[430px]">
              Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu loareet ex. aliquam erat volupat. Nullam quis sagittis nibh.
              Morbi consectetur ultricies ante ac congue. Donec lorem erat, finibus in velit placerat.
            </p>
          </div>
        </figure>
        <div class="relative drop bg-[#f3e9f7] p-12 2xl:p-20 drop-shadow-md rounded">
          <div class="flex flex-col gap-12 rounded">
            <span class="other-font text-xs uppercase">Dont just take our word for it</span>
            <h2 class="text-brand hidden 2xl:block select-text text-3xl font-bold max-w-[490px] md:max-w-[700px] lg:max-w-[490px] mb-7">
              "Finally found an alternative to the mass produced products. Something that incorporates real organic ingredients, nutrient dense wellness while
              promoting sustainability and activity"
            </h2>
            <h2 class="text-brand 2xl:hidden select-text text-3xl font-bold max-w-[490px] md:max-w-[700px] lg:max-w-[490px] mb-7">
              "Finally found an alternative to...
            </h2>
            <span class="text-base">Rachel Cooper, Founder</span>
          </div>
        </div>
      </div>
      <figure class="relative mb-10 drop-shadow-md">
        <img draggable="false" class="drop-shadow-md rounded" alt="bakery process" src="/bakery-process-3.jpg" />
        <span class="absolute top-12 hidden md:block right-12 text-white text-7xl font-light z-10">03</span>
        <h2 class="absolute top-12 left-12 text-white text-xl lg:text-4xl max-w-[250px] lg:max-w-[500px] font-bold z-10">Delivered t your home</h2>
        <div class="absolute hidden xl:flex bottom-12 left-12 z-10 flex-col gap-3">
          <h4 class="other font text-xs uppercase font-bold text-gray-300">Baked to order & gift wrapped</h4>
          <p class="text-base font-semibold text-white max-w-[430px]">
            Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laoreet ex. Aliquam erat volutpat. Nullam quis sagittis nibh.
            Morbi consectetur ultricies ante ac congue. Donec lorem erat, finibus in velit placerat, rutrum augue.
          </p>
        </div>
      </figure>
    </div>
  </section>
</template>

<style scoped>
figure::after {
  background-color: rgba(39, 37, 37, 0.205);
  content: "";
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
