<script setup>
import CustomButton from "./customButton.vue";
import ItemCard from "./itemCard.vue";
import { ref } from "vue";
import MouseFollower from "./mouseFollower.vue";
const clickCounter = ref(0);
function rerun() {
  let num = clickCounter.value;
  clickCounter.value = 0;
  setTimeout(() => {
    clickCounter.value = num;
  }, 50);
}
</script>

<template>
  <MouseFollower target-selector="#target">
    <div class="p-1 bg-amber-950 opacity-25 rounded-sm text-white text-center">
      Если вам выпал враг человечества <br />
      - соврите
    </div></MouseFollower
  >

  <div class="my-auto">
    <div class="w-full flex justify-center mb-3 gap-2">
      <CustomButton @click="clickCounter < 6 ? clickCounter++ : clickCounter"
        >Кто я?</CustomButton
      >
      <CustomButton v-if="clickCounter > 0" class="opacity-50" @click="rerun"
        >rerun</CustomButton
      >
    </div>
    <transition-group
      id="target"
      name="fade"
      tag="div"
      class="md:grid md:grid-rows-2 md:grid-flow-col-dense md:overflow-visible overflow-x-scroll flex md:max-w-full max-w-xs mx-auto gap-3 md:w-fit"
    >
      <ItemCard
        v-for="i in clickCounter"
        :key="i"
        :order="i - 1"
        class="transition-all duration-300 shrink-0"
      ></ItemCard>
    </transition-group>
  </div>
</template>

<style scoped>
/* Add smooth fade-in and fade-out animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
