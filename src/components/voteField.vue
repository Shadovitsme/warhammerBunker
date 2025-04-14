<script setup>
defineProps({
  num: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="flex gap-2">
    <p class="font-bold text-2xl text-[#D6D1C9]">{{ num }}</p>
    <input
      :value="num == 1 ? 'Голосования нет' : ''"
      :readonly="num == 1"
      type="text"
      class="w-full bg-[#D0936D] text-[#4C3528] text-center rounded-lg"
    />
  </div>
</template>
