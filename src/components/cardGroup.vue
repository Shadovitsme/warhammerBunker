<script setup>
import CustomButton from "./customButton.vue";
import ItemCard from "./itemCard.vue";
import { ref } from "vue";
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
  <div class="w-full flex justify-center mb-3 gap-2">
    <CustomButton @click="clickCounter < 6 ? clickCounter++ : clickCounter"
      >Кто я?</CustomButton
    >
    <CustomButton v-if="clickCounter > 0" class="opacity-50" @click="rerun"
      >rerun</CustomButton
    >
  </div>
  <transition-group
    name="fade"
    tag="div"
    class="grid grid-rows-2 grid-flow-col-dense mx-auto gap-3 w-fit"
  >
    <ItemCard
      v-for="i in clickCounter"
      :key="i"
      :order="i - 1"
      class="transition-all duration-300"
    ></ItemCard>
  </transition-group>
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
