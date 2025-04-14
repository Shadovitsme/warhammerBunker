<script setup>
import VoteField from "./voteField.vue";
</script>

<template>
  <div class="rounded-2xl mx-auto mt-10 w-md bg-[#5F4A4E] space-y-2 p-4">
    <p class="w-full text-center font-bold text-2xl text-[#D6D1C9]">
      Карта голосования
    </p>
    <VoteField v-for="i in 5" :num="i" :key="i"></VoteField>
  </div>
</template>
