//import count from "./js/count"
//import sum from "./js/sum"
//import "core-js"
//import "core-js/es/promise"
import "./css/index.css"
import "./less/index.less"
import "./sass/index.sass"
import "./sass/index.scss"
import "./stylus/index.styl"

//console.log(count(2, 1))
//console.log(sum(1, 2, 3, 4, 5))

document.getElementById("btn").onclick = () => {
  import("./js/count")
    .then((res) => {
      console.log("加载成功", res.default(2, 1))
    })
    .catch((e) => {
      console.log("加载失败", e)
    })
}

document.getElementById("btn2").onclick = () => {
  import(/* webpackChunkName: "math" */ "./js/sum")
    .then((res) => {
      console.log("加载成功", res.default(1, 2, 3))
    })
    .catch((e) => {
      console.log("加载失败", e)
    })
}

// 判断是否支持HMR功能
if (module.hot) {
  module.hot.accept("./js/count.js", function (count) {
    const result1 = count(2, 1)
    console.log(result1)
  })

  module.hot.accept("./js/sum.js", function (sum) {
    const result2 = sum(1, 2, 3, 4)
    console.log(result2)
  })
}

new Promise((resolve) => {
  resolve("111")
})

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}
