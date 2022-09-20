<template>
  <div class="wrapper">
    <Magnifier 
    :link="link" 
    :imgAlt="imgAlt"
    :blank="blank" 
    :imgUrl="imgUrl" 
    :imgWidth="imgWidth" 
    :imgHeight="imgHeight" 
    :magWidth="magWidth"
    :magHeight="magHeight"
    />
  </div>
</template>

<script>
//import Magnifier from './libs/jsppui/components/Magnifier.vue';
import { reactive, toRefs } from 'vue'

export default {
  name: "App",
  setup() {
    const state = reactive({
      imgUrl: "https://616e-anguijiexi-6g6waxm2da43237c-1313198579.tcb.qcloud.la/img/100_img.jpg?sign=84472883b2865182d380ef006d161ae4&t=1663569410",
      blank: true,
      link: "https://www.baidu.com",
      imgWidth: 375,
      imgHeight: 481,
      magWidth: 100,
      magHeight: 100,
      imgAlt: "xxx"
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  width: 371px;
  margin: 100px auto;
}
</style>
