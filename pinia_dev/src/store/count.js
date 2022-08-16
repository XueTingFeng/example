import { defineStore } from "@/pinia"

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0 }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    plusAsync(num) {
      setTimeout(() => {
        this.count += num
      }, 1000)
    },
  },
})
