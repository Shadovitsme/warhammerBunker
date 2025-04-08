<script setup>
const props = defineProps({
  head: String,
  text: String,
});
</script>

<template>
  <div>
    <p>{{ props.head }}</p>
    <p>{{ props.text }}</p>
  </div>
</template>
