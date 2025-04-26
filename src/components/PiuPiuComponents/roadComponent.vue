<script setup>
const props = defineProps({
  playerHere: { type: Boolean, required: true },
  formula: { type: String, required: true },
  number: { type: String },
});
</script>
<template>
  <div
    class="py-10 h-full w-1/4 bg-red-100 flex relative justify-center items-end"
  >
    <p class="absolute top-10">{{ props.formula }}</p>
    <div
      v-if="props.playerHere"
      class="bg-black size-20 absolute bottom-10 flex"
    >
      <p class="m-auto text-white text-4xl">{{ props.number }}</p>
    </div>
  </div>
</template>
