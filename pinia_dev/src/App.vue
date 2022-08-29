<template>
  <div>{{ counter.count }}</div>
  <button @click="plus(1)">plus</button>
  <button @click="plusAsync(2)">plusAsync</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/count'

interface counter {
  count: number
  plusAsync: Function
  $patch: Function
}

const counter: counter = useCounterStore()

const plus = (num) => {
  counter.$patch({ count: counter.count + num })
}

const plusAsync = (num) => {
  counter.plusAsync(num)
}

</script>

<style>
</style>
