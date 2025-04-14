<script setup>
import catastroph from "@/bunkerArrays/catastroph";
import CardGroup from "@/components/cardGroup.vue";
import CustomButton from "@/components/customButton.vue";
import TimerItem from "@/components/timerItem.vue";
import VoteCard from "@/components/voteCard.vue";
import { ref } from "vue";
const generateCatastroph = ref(false);
let catastrophText = ref("");

function catastrophRegenerate() {
  catastrophText.value = catastroph();
  generateCatastroph.value = true;
}
</script>
<template>
  <div
    class="fixed top-0 left-0 right-0 h-40 z-20 bg-gradient-to-b from-[#FBF5F2] from-50% to-transparent"
  ></div>
  <div class="gap-y-3">
    <div class="w-full justify-center flex gap-2 mb-20">
      <CustomButton @click="catastrophRegenerate">Что случилось!?</CustomButton>
    </div>
    <p
      v-if="generateCatastroph"
      class="animate-bounce w-full text-center text-5xl mb-20 text-[#241D1A]"
    >
      {{ catastrophText }}
    </p>
    <TimerItem v-if="generateCatastroph"></TimerItem>

    <CardGroup v-if="generateCatastroph"></CardGroup>
    <VoteCard v-if="generateCatastroph"></VoteCard>
  </div>
</template>
<!-- TODO сделать подсказку следующую за курсором при наведении на карточку -->
