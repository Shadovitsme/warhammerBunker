<script setup>
import { whatIsCard, whatIsIcon } from "@/justFunctions";
import { ref } from "vue";

const props = defineProps({
  order: Number,
});

const cardText = ref(whatIsCard(props.order));

const headArray = [
  "Профессия",
  "Биология",
  "Здоровье",
  "Хобби",
  "Багаж",
  "Фобии",
];

const borderCollorArray = [
  "#D9D1B1",
  "#537A84",
  "#B04337",
  "#94A99F",
  "#896763",
  "#5F4A4E",
];
</script>

<template>
  <div
    @click="cardText = whatIsCard(props.order)"
    class="relative w-[300px] h-[450px] bg-[#D0936D] rounded-lg flex items-center border-8 px-4 pb-4 justify-center"
    :style="{ borderColor: borderCollorArray[props.order] }"
  >
    <div
      class="z-10 absolute rounded-t-lg top-0 left-0 right-0 bg-[#292E36] py-2"
    >
      <p class="w-full text-xs text-center text-white">
        {{ headArray[props.order] }}
      </p>
    </div>
    <img class="w-full shrink-0" :src="whatIsIcon(props.order)" />
    <div
      class="absolute top-0 left-0 right-0 z-0 h-4"
      :style="{ backgroundColor: borderCollorArray[props.order] }"
    ></div>
    <div
      class="z-10 absolute rounded-b-lg bottom-0 left-0 px-4 right-0 bg-[#292E36] py-2"
    >
      <p class="w-full text-center text-white" v-html="cardText"></p>
    </div>
    <div
      class="absolute bottom-0 left-0 right-0 z-0 h-4"
      :style="{ backgroundColor: borderCollorArray[props.order] }"
    ></div>
  </div>
</template>
