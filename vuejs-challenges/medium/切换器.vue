<script setup lang='ts'>

/**
 * Implement a composable function that toggles the state
 * Make the function work correctly
*/
import { ref } from 'vue'
function useToggle(flag) {
  let state = ref(flag)

  function toggle() {
    state.value = !state.value
  }

  return [state, toggle]
}

const [state, toggle] = useToggle(false)

</script>

<template>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle">
    Toggle state
  </p>
</template>