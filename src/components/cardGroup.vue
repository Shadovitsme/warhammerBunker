<script setup>
import CustomButton from "./customButton.vue";
import ItemCard from "./itemCard.vue";
import { ref } from "vue";
const clickCounter = ref(0);
</script>

<template>
  <div class="w-full flex justify-center mb-3">
    <CustomButton @click="clickCounter < 6 ? clickCounter++ : clickCounter"
      >Кто я?</CustomButton
    >
  </div>
  <div class="grid grid-rows-2 grid-flow-col-dense mx-auto gap-3 w-fit">
    <ItemCard v-for="i in clickCounter" :key="i" :order="i - 1"></ItemCard>
  </div>
</template>
