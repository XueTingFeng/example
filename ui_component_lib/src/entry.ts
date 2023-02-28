import { App } from "vue"
import SButton from "./button"
import SFCButton from "./SFCButton.vue"
import JSXButton from "./JSXButton"

//导出单独组件
export { SButton, SFCButton, JSXButton }

//编写一个组件，实现install方法

console.log('SButton',SButton.name)

export default {
    install(app: App) :void {
        app.component(SButton.name,SButton)
        app.component(SFCButton.name,SFCButton)
        app.component(JSXButton.name,JSXButton)
    }
}