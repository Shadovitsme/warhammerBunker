<script setup>
import RoadComponent from "@/components/PiuPiuComponents/roadComponent.vue";
import { ref } from "vue";

const playerHere = ref(0);
</script>

<template>
  <div
    class="top-0 left-0 absolute right-0 bottom-0 flex justify-center items-center gap-1"
  >
    <RoadComponent
      @click="playerHere = 0"
      :player-here="playerHere == 0"
    ></RoadComponent>
    <RoadComponent
      @click="playerHere = 1"
      :player-here="playerHere == 1"
    ></RoadComponent>
  </div>
</template>
