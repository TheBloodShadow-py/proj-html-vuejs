<script>
import Button from "../../utility/Button.vue";
import { store } from "../../../store";

export default {
  components: { Button },
  data() {
    return {
      store,
      currentIndex: 0,
      updateTimer: undefined,
    };
  },
  methods: {
    changeIndex: function (direction) {
      if (direction === "next") {
        if (this.currentIndex === store.landingProducts.length - 1) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
      } else {
        if (this.currentIndex === 0) {
          this.currentIndex = store.landingProducts.length - 1;
        } else {
          this.currentIndex--;
        }
      }
    },
    startAutoIndex: function (time) {
      this.updateTimer = setInterval(() => {
        this.changeIndex("next");
      }, time);
    },
    stopAutoIndex: function () {
      clearInterval(this.updateTimer);
    },
  },
  computed: {
    nextIndex: function () {
      if (this.currentIndex === store.landingProducts.length - 1) {
        return 0;
      } else {
        const plusIndex = this.currentIndex + 1;
        return plusIndex;
      }
    },
  },
  mounted() {
    this.startAutoIndex(5000);
  },
};
</script>

<template>
  <section class="px-8 py-[160px]">
    <div class="container my-0 mx-auto transition-all duration-150">
      <div class="flex flex-col items-start gap-12 md:justify-between md:flex-row">
        <div class="flex flex-col gap-6 items-start">
          <span class="other-font uppercase text-xs">Our products</span>
          <h2 class="text-brand select-text text-3xl font-bold max-w-[490px] md:max-w-[700px] lg:max-w-[490px] mb-7">
            All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all- natural, all organic ingredients.
          </h2>
          <Button :isLightButton="false" :buttonText="'Start Shopping'" />
        </div>
        <div class="flex gap-2 items-center lg:w-[50%] xl:hidden" @mouseenter="stopAutoIndex()" @mouseleave="startAutoIndex(5000)">
          <figure class="relative drop-shadow-md">
            <font-awesome-icon @click="changeIndex('behind')" class="arrow-left" :icon="['fas', 'chevron-left']" />
            <img draggable="false" class="rounded" :alt="store.landingProducts[currentIndex].alt" :src="store.landingProducts[currentIndex].src" />
            <font-awesome-icon @click="changeIndex('next')" class="arrow-right" :icon="['fas', 'chevron-right']" />
          </figure>
        </div>
        <div class="gap-4 items-center hidden xl:flex w-[55%]" @mouseenter="stopAutoIndex()" @mouseleave="startAutoIndex(5000)">
          <figure class="relative drop-shadow-md">
            <font-awesome-icon @click="changeIndex('behind')" class="arrow-left" :icon="['fas', 'chevron-left']" />
            <img draggable="false" class="rounded" :alt="store.landingProducts[currentIndex].alt" :src="store.landingProducts[currentIndex].src" />
          </figure>
          <figure class="relative drop-shadow-md">
            <img draggable="false" loading="lazy" class="rounded" alt="store.landingProducts[nextIndex].alt" :src="store.landingProducts[nextIndex].src" />
            <font-awesome-icon @click="changeIndex('next')" class="arrow-right" :icon="['fas', 'chevron-right']" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.arrow-left,
.arrow-right {
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  color: white;
  background-color: #a691b2;
  padding: 23px 11px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s linear;
}

.arrow-left:hover,
.arrow-right:hover {
  background-color: #55328b;
}

.arrow-left {
  left: 0px;
}

.arrow-right {
  right: 0px;
}
</style>
