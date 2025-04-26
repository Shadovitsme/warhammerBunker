<script setup>
const props = defineProps({ playerHere: { type: Boolean, required: true } });
</script>
<template>
  <div class="py-10 h-full w-1/4 bg-red-100 flex justify-center items-end">
    <div v-if="props.playerHere" class="bg-black size-20"></div>
  </div>
</template>
