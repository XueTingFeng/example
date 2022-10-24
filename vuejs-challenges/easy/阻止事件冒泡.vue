<script setup lang="ts">

const click1 = (e) => {
  e.stopPropagation()()
  console.log('click1')
}

const click2 = (e) => {
  e.stopPropagation()
  console.log('click2')
}

</script>

<template>
  <div @click.stop="click1">
   <div @click.stop="click2">
     click me
   </div>
  </div>
</template>