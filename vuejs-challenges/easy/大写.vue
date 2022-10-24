<script setup>
import { ref, vModelText } from 'vue';

vModelText.updated = (el, { value, modifiers: { capitalize } }) => {
  if (value && capitalize) {
    el.value = value[0].toUpperCase() + value.slice(1);
  }
};

const value = ref('');
</script>

<template>
  <input type="text" v-model.capitalize="value" />
</template>