<template>
  <div
    v-if="isVisible"
    class="mouse-follower"
    :style="{ top: `${y}px`, left: `${x}px` }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MouseFollower",
  props: {
    targetSelector: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      x: 0,
      y: 0,
      isVisible: false,
    };
  },
  mounted() {
    const target = document.querySelector(this.targetSelector);
    if (target) {
      target.addEventListener("mouseenter", this.handleMouseEnter);
      target.addEventListener("mouseleave", this.handleMouseLeave);
      target.addEventListener("mousemove", this.handleMouseMove);
    }
  },
  beforeUnmount() {
    const target = document.querySelector(this.targetSelector);
    if (target) {
      target.removeEventListener("mouseenter", this.handleMouseEnter);
      target.removeEventListener("mouseleave", this.handleMouseLeave);
      target.removeEventListener("mousemove", this.handleMouseMove);
    }
  },
  methods: {
    handleMouseMove(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    handleMouseEnter() {
      this.isVisible = true;
    },
    handleMouseLeave() {
      this.isVisible = false;
    },
  },
};
</script>

<style scoped>
.mouse-follower {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
}
</style>
