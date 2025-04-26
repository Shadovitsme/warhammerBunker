<script setup>
const props = defineProps({
  playerHere: { type: Boolean, required: true },
  formula: { type: String, required: true },
  number: { type: String },
  enemyCount: { type: Number },
});
</script>
<template>
  <div class="py-10 px-5 h-full w-1/4 bg-red-100 flex relative justify-center">
    <div class="absolute top-10">
      <div class="flex flex-wrap gap-1 justify-center">
        <div
          class="size-2 bg-amber-900"
          v-for="i in props.enemyCount"
          :key="i"
        ></div>
      </div>
      <p class="mt-2 w-full text-center">{{ props.enemyCount }}</p>
    </div>
    <p class="absolute top-1/2">{{ props.formula }}</p>

    <div
      v-if="props.playerHere"
      class="bg-black size-20 absolute bottom-10 flex"
    >
      <p class="m-auto text-white text-4xl">{{ props.number }}</p>
    </div>
  </div>
</template>
