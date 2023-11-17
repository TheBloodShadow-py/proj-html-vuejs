<script>
export default {
  data() {
    return {};
  },
  methods: {
    scrollToTop: function () {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
};
</script>

<template>
  <div
    @click.prevent="scrollToTop()"
    class="fixed z-[999] bg-[#474747de] hover:bg-[#6d6b6b] text-white p-4 transition-colors duration-300 rounded-xl cursor-pointer right-14 bottom-8 flex items-center justify-center"
  >
    <font-awesome-icon :icon="['fas', 'angle-up']" />
  </div>
</template>
