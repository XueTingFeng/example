import { createApp  } from "vue"

import sButton from "./button"
import SFCButton from "./SFCButton.vue"

const s: string = "hello world!"
console.log(s)

createApp(SFCButton).mount("#app")