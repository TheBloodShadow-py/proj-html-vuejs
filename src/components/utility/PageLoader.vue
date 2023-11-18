<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div role="loader" class="fixed top-0 left-0 w-full h-full bg-violet-100 z-[999]">
    <div class="container-load">
      <span class="loader"></span>
    </div>
  </div>
</template>

<style scoped>
.container-load {
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
}
.loader {
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: currentColor;
  display: block;
  margin: -50px auto 0;
  position: relative;
  color: red;
  transform: translateY(30px);
  box-sizing: border-box;
  animation: animloader 2s ease infinite;
}
.loader::after,
.loader::before {
  content: "";
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: currentColor;
  color: #55328b;
  position: absolute;
  left: 30px;
  top: 0;
  animation: animloader 2s 0.2s ease infinite;
}
.loader::before {
  animation-delay: 0.4s;
  left: 60px;
}

@keyframes animloader {
  0% {
    top: 0;
    color: #55328b;
  }
  50% {
    top: 30px;
    color: #a691b2;
  }
  100% {
    top: 0;
    color: #55328b;
  }
}
</style>
