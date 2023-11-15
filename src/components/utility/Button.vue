<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "no text...",
    },
    isLightButton: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
  <button
    v-if="isLightButton"
    class="text-brand bg-white py-3 hover:bg-brand hover:text-white transition-colors duration-300 px-6 text-sm font-semibold rounded-md drop-shadow-lg"
  >
    {{ buttonText }}
  </button>
  <button
    v-else
    class="text-white bg-brand py-3 hover:bg-white hover:text-brand transition-colors duration-300 px-6 text-sm font-semibold rounded-md drop-shadow-lg"
  >
    {{ buttonText }}
  </button>
</template>
