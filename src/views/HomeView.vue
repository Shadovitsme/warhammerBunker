<script setup>
import catastroph from "@/bunkerArrays/catastroph";
import CardGroup from "@/components/cardGroup.vue";
import CustomButton from "@/components/customButton.vue";
import { ref } from "vue";
const generateCatastroph = ref(false);
let catastrophText = ref("");

function catastrophRegenerate() {
  catastrophText.value = catastroph();
  generateCatastroph.value = true;
}
</script>
<template>
  <div class="gap-y-3">
    <div class="w-full justify-center flex gap-2 mb-20">
      <CustomButton @click="catastrophRegenerate">Что случилось!?</CustomButton>
      <!-- <CustomButton
        v-if="generateCatastroph"
        @click="generateCatastroph = false"
        class="opacity-50"
        >Скрыть катастрофу</CustomButton -->
      <!-- > -->
    </div>
    <p
      v-if="generateCatastroph"
      class="animate-bounce w-full text-center text-5xl mb-20 text-[#130D0A]"
    >
      {{ catastrophText }}
    </p>
    <CardGroup v-if="generateCatastroph"></CardGroup>
  </div>
</template>
