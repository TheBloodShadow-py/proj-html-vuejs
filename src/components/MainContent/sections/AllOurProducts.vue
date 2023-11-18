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
    lastIndex: function () {
      const tempIndex = this.currentIndex + 3;
      const rest = tempIndex % store.landingProducts.length;
      if (tempIndex > store.landingProducts.length - 1) {
        return rest;
      } else {
        return tempIndex;
      }
    },
    midIndex: function () {
      const tempIndex = this.lastIndex - 1;
      if (tempIndex < 0) {
        return store.landingProducts.length - 1;
      }
      return tempIndex;
    },
  },
  mounted() {
    this.startAutoIndex(5000);
  },
};
</script>

<template>
  <section class="px-8 pb-[160px]">
    <div class="container my-0 mx-auto transition-all duration-150">
      <div class="grid grid-cols-1 md:grid-cols-7 grid-rows-1 gap-7">
        <div class="col-span-3 xl:col-span-2 flex flex-col gap-6 items-center justify-center text-center">
          <h2 class="text-brand select-text text-3xl font-bold">Find a freshly baked product perfect for you</h2>
          <span class="text-base max-w-[350px]"
            >Integer a nibh vitae ex porttitor tutrum et ut velit. Etiam ac felis at leo feugiat placerat. Sed ac nulla id orci temport convallis sed.</span
          >
          <Button :isLightButton="false" :buttonText="'Shop All Products'" />
        </div>
        <div class="col-span-4 xl:col-span-5">
          <div class="flex gap-4 flex-col items-center lg:w-[50%] md:hidden" @mouseenter="stopAutoIndex()" @mouseleave="startAutoIndex(5000)">
            <figure class="relative drop-shadow-md w-[80%] md:w-[100%]">
              <font-awesome-icon @click="changeIndex('behind')" class="arrow-left" :icon="['fas', 'chevron-left']" />
              <img draggable="false" class="rounded" :alt="store.landingProducts[currentIndex].alt" :src="store.landingProducts[currentIndex].src" />
              <font-awesome-icon @click="changeIndex('next')" class="arrow-right" :icon="['fas', 'chevron-right']" />
            </figure>
            <h2 class="text-brand text-center mt-1 select-text text-xl font-bold">{{ store.landingProducts[currentIndex].alt }}</h2>
            <span class="text-base">{{ store.landingProducts[currentIndex].prices }}</span>
          </div>

          <div class="md:flex 2xl:hidden gap-5 hidden items-center" @mouseenter="stopAutoIndex()" @mouseleave="startAutoIndex(5000)">
            <div class="flex gap-4 flex-col items-center lg:w-[50%]">
              <figure class="relative drop-shadow-md w-[80%] md:w-[100%]">
                <font-awesome-icon @click="changeIndex('behind')" class="arrow-left" :icon="['fas', 'chevron-left']" />
                <img draggable="false" class="rounded" :alt="store.landingProducts[currentIndex].alt" :src="store.landingProducts[currentIndex].src" />
              </figure>
              <h2 class="text-brand text-center mt-1 select-text text-lg font-bold">{{ store.landingProducts[currentIndex].alt }}</h2>
              <span class="text-base">{{ store.landingProducts[currentIndex].prices }}</span>
            </div>

            <div class="flex gap-4 flex-col items-center lg:w-[50%]">
              <figure class="relative drop-shadow-md w-[80%] md:w-[100%]">
                <img draggable="false" class="rounded" :alt="store.landingProducts[nextIndex].alt" :src="store.landingProducts[nextIndex].src" />
                <font-awesome-icon @click="changeIndex('next')" class="arrow-right" :icon="['fas', 'chevron-right']" />
              </figure>
              <h2 class="text-brand text-center mt-1 select-text text-lg font-bold">{{ store.landingProducts[nextIndex].alt }}</h2>
              <span class="text-base">{{ store.landingProducts[nextIndex].prices }}</span>
            </div>
          </div>

          <div class="2xl:flex gap-5 hidden items-center" @mouseenter="stopAutoIndex()" @mouseleave="startAutoIndex(5000)">
            <div class="flex gap-4 flex-col items-center lg:w-[50%]">
              <figure class="relative drop-shadow-md w-[80%] md:w-[100%]">
                <font-awesome-icon @click="changeIndex('behind')" class="arrow-left" :icon="['fas', 'chevron-left']" />
                <img draggable="false" class="rounded" :alt="store.landingProducts[currentIndex].alt" :src="store.landingProducts[currentIndex].src" />
              </figure>
              <h2 class="text-brand text-center mt-1 select-text text-lg font-bold">{{ store.landingProducts[currentIndex].alt }}</h2>
              <span class="text-base">{{ store.landingProducts[currentIndex].prices }}</span>
            </div>
            <div class="flex gap-4 flex-col items-center lg:w-[50%]">
              <figure class="relative drop-shadow-md w-[80%] md:w-[100%]">
                <img draggable="false" class="rounded" :alt="store.landingProducts[nextIndex].alt" :src="store.landingProducts[nextIndex].src" />
              </figure>
              <h2 class="text-brand text-center mt-1 select-text text-lg font-bold">{{ store.landingProducts[nextIndex].alt }}</h2>
              <span class="text-base">{{ store.landingProducts[nextIndex].prices }}</span>
            </div>
            <div class="flex gap-4 flex-col items-center lg:w-[50%]">
              <figure class="relative drop-shadow-md w-[80%] md:w-[100%]">
                <img draggable="false" class="rounded" :alt="store.landingProducts[midIndex].alt" :src="store.landingProducts[midIndex].src" />
              </figure>
              <h2 class="text-brand text-center mt-1 select-text text-lg font-bold">{{ store.landingProducts[midIndex].alt }}</h2>
              <span class="text-base">{{ store.landingProducts[midIndex].prices }}</span>
            </div>
            <div class="flex gap-4 flex-col items-center lg:w-[50%]">
              <figure class="relative drop-shadow-md w-[80%] md:w-[100%]">
                <img draggable="false" class="rounded" :alt="store.landingProducts[lastIndex].alt" :src="store.landingProducts[lastIndex].src" />
                <font-awesome-icon @click="changeIndex('next')" class="arrow-right" :icon="['fas', 'chevron-right']" />
              </figure>
              <h2 class="text-brand text-center mt-1 select-text text-lg font-bold">{{ store.landingProducts[lastIndex].alt }}</h2>
              <span class="text-base">{{ store.landingProducts[lastIndex].prices }}</span>
            </div>
          </div>
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
