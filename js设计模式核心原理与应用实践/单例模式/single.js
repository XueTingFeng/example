class SingleDog {
  show() {
    console.log("我是一个单例对象")
  }
}

const s1 = new SingleDog()
const s2 = new SingleDog()

// false
s1 === s2

class SingleDog2 {
  show() {
    console.log("我是一个单例对象")
  }
  static getInstace() {
    //判断是否new过一个实例
    if (!SingleDog2.instance) {
      // 若这个唯一的实例不存在，那么先创建它
      SingleDog2.instance = new SingleDog2()
    }
    // 如果这个唯一的实例已经存在，则直接返回
    return SingleDog2.instance
  }
}

const s3 = SingleDog2.getInstace()
const s4 = SingleDog2.getInstace()

//true
s3 === s4

//getInstance的逻辑还可以用闭包来实现
SingleDog.getInstance = (function () {
  // 定义自由变量instance，模拟私有变量
  let instace = null
  return function () {
    if (!instace) {
      // 如果为null则new出唯一实例
      instace = new SingleDog()
    }
    return instace
  }
})()

//Vuex如何确保Store的唯一性
// 安装vuex插件
//在项目中引入 Vuex
Vue.use(Vuex)

// 将store注入到Vue实例中
new Vue({
  el: "#app",
  store,
})

let Vue // 这个Vue的作用和楼上的instance作用一样
export function install(_Vue) {
  // 判断传入的Vue实例对象是否已经被install过Vuex插件（是否有了唯一的state）
  if (Vue && _Vue === Vue) {
    if (ProcessingInstruction.env.NODE_ENV !== "PRODUCTION") {
      console.error(
        "[vuex] already installed. Vue.use(Vuex) should be called only once."
      )
    }
    return
  }
  // 若没有，则为这个Vue实例对象install一个唯一的Vuex
  Vue = _Vue
  // 将Vuex的初始化逻辑写进Vue的钩子函数里
  applyMixin(Vue)
}
