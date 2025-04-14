<template>
  <div class="w-56 fixed top-1/2 transform -translate-y-1/2 z-20 left-1/8">
    <h1 class="text-2xl w-full font-bold mb-4 text-center text-[#241D1A]">
      Таймер
    </h1>
    <p
      class="text-4xl font-mono text-center mb-2 text-[#241D1A]"
      :class="seconds > 3 ? 'animate-bounce' : ''"
    >
      {{ formatTime }}
    </p>
    <div class="flex w-full justify-center items-center">
      <CustomButton
        @click="startTimer"
        :disabled="isRunning"
        class="disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {{ isRunning ? "Таймер идет" : "Запустить" }}
      </CustomButton>
      <CustomButton class="ml-1" :disabled="!isRunning" @click="stopTimer"
        >Стоп</CustomButton
      >
    </div>
    <div class="flex w-full mt-1 justify-center">
      <CustomButton :disabled="!isRunning" @click="resetTimer"
        >Сброс</CustomButton
      >
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import CustomButton from "./customButton.vue";

const milliseconds = ref(0);
const isRunning = ref(false);
let timer = null;
let startTime = null;

const formatTime = computed(() => {
  const seconds = Math.floor(milliseconds.value / 1000);
  const ms = milliseconds.value % 1000;
  return `${seconds.toString().padStart(2, "0")}.${ms
    .toString()
    .padStart(3, "0")}`;
});

const updateTimer = () => {
  milliseconds.value = Date.now() - startTime;
};

const startTimer = () => {
  if (!isRunning.value) {
    isRunning.value = true;
    startTime = Date.now() - milliseconds.value;
    timer = setInterval(updateTimer, 10); // Обновляем каждые 10 мс
  }
};

// Для остановки таймера (опционально)
const stopTimer = () => {
  isRunning.value = false;
  clearInterval(timer);
};

// Сброс таймера (опционально)
const resetTimer = () => {
  stopTimer();
  milliseconds.value = 0;
};
</script>
