<script setup>
import RoadComponent from "@/components/PiuPiuComponents/roadComponent.vue";
import { ref } from "vue";

const playerHere = ref(1);
const number = ref(1);
const roadCounter = ref(2);

const formulaArray = ref([]);

const actionArray = ["+", "=", "-", "/", "*"];

function refillFormulaArray() {
  for (let i = 1; i < roadCounter.value + 1; i++) {
    let action = actionArray[getRandomInt(actionArray.length)];
    let num = getRandomInt(100);
    formulaArray.value.push({
      formulaText: action + num,
      formulaAction: action,
      formulaNum: num,
    });
  }
}

refillFormulaArray();

function chooseRoad(roadNum) {
  playerHere.value = roadNum;
  number.value = number.value + formulaArray[roadNum - 1].formulaNum;
  refillFormulaArray();
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
</script>

<template>
  <div
    class="top-0 left-0 absolute right-0 bottom-0 flex justify-center items-center gap-1"
  >
    <RoadComponent
      v-for="i in roadCounter"
      :key="i"
      @click="chooseRoad(i)"
      :formula="formulaArray[i - 1].formulaText"
      :player-here="playerHere == i"
      :number="number"
      :enemy-count="getRandomInt(100)"
    ></RoadComponent>
  </div>
</template>
