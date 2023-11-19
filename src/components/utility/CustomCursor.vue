<script>
export default {
  data() {
    return {
      clientX: 0,
      clientY: 0,
      isHover: false,
    };
  },
  methods: {
    update: function () {
      const elemStyle = this.$refs.cursor.style;
      elemStyle.left = this.clientX + "px";
      elemStyle.top = this.clientY + "px";

      requestAnimationFrame(this.update);
    },
  },
  mounted() {
    window.addEventListener("mousemove", (e) => {
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    });
    this.update();

    const buttons = document.querySelectorAll("button");
    const anchors = document.querySelectorAll("a");

    buttons.forEach((elem) =>
      elem.addEventListener("mouseover", (e) => {
        this.isHover = true;
      })
    );
    anchors.forEach((elem) =>
      elem.addEventListener("mouseover", (e) => {
        this.isHover = true;
      })
    );

    buttons.forEach((elem) =>
      elem.addEventListener("mouseleave", (e) => {
        this.isHover = false;
      })
    );

    anchors.forEach((elem) =>
      elem.addEventListener("mouseleave", (e) => {
        this.isHover = false;
      })
    );
  },
};
</script>

<template>
  <div
    ref="cursor"
    role="cursor"
    :class="isHover ? 'bg-[#f3bad4]' : 'bg-[#9168cfbd]'"
    class="fixed z-[1000] pointer-events-none transition-colors duration-[350ms] drop-shadow-md rounded-full w-[20px] h-[20px] translate-y-[-50%] translate-x-[-50%] border-[2.5px] aspect-square border-brand"
  ></div>
</template>
