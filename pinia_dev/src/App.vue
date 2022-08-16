<template>
  <div>{{ counter.count }}</div>
  <button @click="plus(1)">plus</button>
  <button @click="plusAsync(2)">plusAsync</button>
</template>

<script setup>
import { useCounterStore } from '@/store/count'

const counter = useCounterStore()

const plus = (num) => {
  counter.$patch({ count: counter.count + num })
}

const plusAsync = (num) => {
  counter.plusAsync(num)
}

</script>

<style>
</style>
