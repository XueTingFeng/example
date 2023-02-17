import { App } from "vue"
import MyButton from "./button/index"
import SFCButton from "./SFCButton.vue"
import JSXButton from "./JSXButton"

//导出单独组件
export { MyButton, SFCButton, JSXButton }

//编写一个组件，实现install方法
export default {
    install(app: App){
        app.component(MyButton.name,MyButton)
        app.component(SFCButton.name,SFCButton)
        app.component(JSXButton.name,JSXButton)
    }
}