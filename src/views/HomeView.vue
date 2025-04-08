<template>
  <div class="">
    <button @click="clickCount++">add item</button>
    <ItemCard text="профессия"></ItemCard>
    <p v-if="clickCount > 0">профессия</p>
    <p v-if="clickCount > 1">здоровье</p>
    <p v-if="clickCount > 2">факт</p>
    <p v-if="clickCount > 3">хобби</p>
    <p v-if="clickCount > 4">фобия</p>
    <p v-if="clickCount > 5">багаж</p>
  </div>
</template>

<script setup>
import ItemCard from "@/components/itemCard.vue";
import { ref } from "vue";
const clickCount = ref(0);
</script>
