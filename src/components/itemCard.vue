<script setup>
const props = defineProps({
  head: String,
  text: String,
});
</script>

<template>
  <div
    class="text-center p-4 hover:w-50 w-40 text-amber-950 rounded-2xl bg-amber-500 duration-200"
  >
    <p class="">{{ props.head }}</p>
    <p class="mt-4 text-xl font-bold">{{ props.text }}</p>
  </div>
</template>
