<script setup>
const props = defineProps({
  head: String,
});
</script>

<template>
  <div
    class="text-center h-full p-4 text-amber-950 rounded-2xl bg-amber-500 duration-200"
  >
    <p class="">{{ props.head }}</p>
    <div class="mt-4 text-xl font-bold"><slot></slot></div>
  </div>
</template>
