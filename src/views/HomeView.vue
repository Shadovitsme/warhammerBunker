<script setup>
import catastroph from "@/bunkerArrays/catastroph";
import workText from "@/bunkerArrays/workLonger/longerWork";
import CustomButton from "@/components/customButton.vue";
import ItemCard from "@/components/itemCard.vue";
import { ref } from "vue";
const clickCount = ref(0);
const generateCatastroph = ref(false);
let catastrophText = ref("");

function catastrophRegenerate() {
  catastrophText.value = catastroph();
  generateCatastroph.value = true;
}
</script>
<template>
  <div>
    <div class="w-full justify-center flex gap-2">
      <CustomButton @click="catastrophRegenerate">Что случилось!?</CustomButton>
      <CustomButton
        v-if="generateCatastroph"
        @click="generateCatastroph = false"
        class="opacity-50"
        >Скрыть катастрофу</CustomButton
      >
    </div>
    <p
      v-if="generateCatastroph"
      class="animate-bounce w-full text-center text-7xl my-20 text-red-700"
    >
      {{ catastrophText }}
    </p>

    <div class="w-full justify-center flex">
      <button
        class="rounded-3xl bg-red-800 hover:bg-red-700 active:bg-red-900 duration-500 py-3 px-5 mb-4 text-red-50 hover:text-red-100 hover:text-2xl font-bold"
        @click="clickCount++"
      >
        Тянуть карту!
      </button>
    </div>

    <div
      class="flex gap-5 transition-all duration-300 items-center w-full justify-center"
    >
      <div v-if="clickCount > 0" class="transition-all duration-300">
        <ItemCard head="профессия"> <p v-html="workText()"></p></ItemCard>
      </div>
      <div v-if="clickCount > 1" class="transition-all duration-300">
        <ItemCard head="здоровье"></ItemCard>
      </div>
      <div v-if="clickCount > 2" class="transition-all duration-300">
        <ItemCard head="факт"></ItemCard>
      </div>
      <div v-if="clickCount > 3" class="transition-all duration-300">
        <ItemCard head="хобби"></ItemCard>
      </div>
      <div v-if="clickCount > 4" class="transition-all duration-300">
        <ItemCard head="фобия"></ItemCard>
      </div>
      <div v-if="clickCount > 5" class="transition-all duration-300">
        <ItemCard head="багаж"></ItemCard>
      </div>
    </div>
  </div>
</template>
