<script>
export default {
  props: {
    logo: {
      type: String,
      required: true,
    },
    navElements: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <header class="py-4 px-8 mb-36">
    <div class="container my-0 mx-auto transition-all duration-150">
      <div class="flex justify-between items-center">
        <img draggable="false" alt="logo" class="w-[150px]" v-once :src="logo" />
        <menu class="gap-6 items-center hidden lg:flex">
          <li class="cursor-pointer p-1" v-for="navItems in navElements">
            <a
              :class="navItems.name === 'Home' ? 'selected' : ''"
              class="text-brand uppercase text-[13px] relative whitespace-nowrap other-font"
              :href="navItems.link"
              >{{ navItems.name }}</a
            >
          </li>
          <li class="ml-3">
            <font-awesome-icon class="text-brand text-lg cursor-pointer" :icon="['fas', 'cart-shopping']" />
          </li>
        </menu>
        <div class="items-center flex gap-8 lg:hidden">
          <font-awesome-icon class="text-brand text-lg cursor-pointer" :icon="['fas', 'cart-shopping']" />
          <font-awesome-icon class="text-brand text-lg cursor-pointer" :icon="['fas', 'bars']" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.selected::after {
  display: table;
  position: absolute;
  content: "";
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 20px;
  background-color: #55328b;
}
</style>
