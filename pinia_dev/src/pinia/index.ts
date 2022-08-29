import { reactive, inject } from "vue"

export function createPinia(): Object {
  return {
    install(app) {
      const store = reactive({})

      app.provide("setSubStore", (storeName, subStore) => {
        store[storeName] = subStore

        const $patch = (options) => {
          for (let key in options) {
            store[storeName][key] = options[key]
          }
        }

        store[storeName].$patch = $patch
      })

      app.provide("piniaStore", store)
    },
  }
}

export function defineStore(storeName: string, options: any): Function {
  const store: Object = reactive({})
  const state: String | Number | Array<unknown> | Object = options.state()
  const actions = options.actions

  for (let key in state) {
    store[key] = state[key]
  }

  for (let method in actions) {
    store[method] = actions[method].bind(store)
  }

  return function (): Object {
    const piniaStore: Object = inject("piniaStore")

    if (!piniaStore[storeName]) {
      const setSubStore: Function = inject("setSubStore")
      setSubStore(storeName, store)
    }

    console.log(piniaStore)
    return piniaStore[storeName]
  }
}
