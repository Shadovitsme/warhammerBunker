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
    class="relative w-[164px] h-[228px] md:w-[300px] md:h-[450px] rounded-lg items-center p-2 md:p-4 justify-center"
    :style="{
      backgroundColor:
        props.order != undefined ? borderCollorArray[props.order] : '#846389',
    }"
  >
    <div
      class="z-10 absolute items-center rounded-t-lg top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 bg-[#292E36] py-2"
    >
      <p
        class="w-full text-center mt-1 text-xs md:text-xl opacity-50 font-bold text-white uppercase"
      >
        {{
          props.order != undefined ? headArray[props.order] : "Карта действия"
        }}
      </p>
    </div>
    <div
      class="bg-[#D0936D] rounded-lg h-full flex items-center px-2 md:px-4 pb-16"
    >
      <img class="w-full shrink-0" :src="whatIsIcon(props.order)" />
    </div>

    <div
      class="z-10 absolute rounded-b-lg md:bottom-4 bottom-2 left-2 right-2 md:left-4 md:px-4 md:right-4 bg-[#292E36] py-2"
    >
      <p class="w-full text-center text-xl text-white" v-html="cardText"></p>
    </div>
  </div>
</template>
