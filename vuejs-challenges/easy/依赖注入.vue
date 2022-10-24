<script setup lang="ts">
//App.vue
import { ref, provide } from "vue"
import Child from "./Child.vue"
const count = ref(1)
provide("count", count)
setInterval(() => {
  count.value++
}, 1000)
</script>

<template>
  <Child />
</template>


<script setup lang="ts">
//child.vue
// Add a piece of code to make the `count` value get injected into the child component.
import { inject } from 'vue';
const count = inject('count');
</script>

<template>
  {{ count }}
</template>