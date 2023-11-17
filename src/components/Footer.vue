<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      logoSrc: "/avada-bakery-logo.png",
      cartElements: 0,
    };
  },
};
</script>

<template>
  <section class="px-8 py-[90px]">
    <div class="container my-0 mx-auto transition-all duration-150">
      <div class="flex justify-between items-center">
        <div class="flex flex-col gap-12 justify-start">
          <img alt="logo" draggable="false" class="w-[150px]" v-once :src="logoSrc" />
          <menu class="flex items-center gap-x-12 gap-y-6 mb-14 flex-wrap">
            <li class="text-base text-brand" v-for="elem in store.footerElements">
              <a :href="elem.link"> {{ elem.name }}</a>
            </li>
            <div class="flex items-center gap-2">
              <font-awesome-icon class="text-brand text-lg cursor-pointer" :icon="['fas', 'cart-shopping']" />
              <div class="circle">{{ cartElements }}</div>
            </div>
          </menu>
          <span class="text-xs"> &copy; Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All rights Reserved | Powered by WordPress </span>
        </div>
        <div class="flex-col gap-12 justify-end hidden xl:flex">
          <h2 class="text-brand select-text text-xl font-bold text-right">Subscribe to our NewSletter</h2>
          <div class="flex items-center gap-4 mb-14">
            <input type="email" placeholder="Enter email address*" class="border rounded-md focus-visible:outline-none py-[0.69rem] px-6 w-[350px]" />
            <button
              class="text-white bg-brand py-3 hover:bg-white hover:text-brand transition-colors duration-300 px-6 text-sm font-semibold rounded-md drop-shadow-lg"
            >
              Subscribe
            </button>
          </div>
          <div class="flex gap-10 items-center justify-end text-right text-brand">
            <font-awesome-icon class="cursor-pointer text-lg" :icon="['fab', 'instagram']" />
            <font-awesome-icon class="cursor-pointer text-lg" :icon="['fab', 'x-twitter']" />
            <font-awesome-icon class="cursor-pointer text-lg" :icon="['fab', 'facebook-f']" />
            <font-awesome-icon class="cursor-pointer text-lg" :icon="['fab', 'pinterest-p']" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.circle {
  background-color: #f0edf5;
  height: 25px;
  width: 25px;
  aspect-ratio: 1/1;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #55328b;
}
</style>
