// 将展示Modal的逻辑单独封装
function openModal() {
  const modal = new Modal()
  modal.style.display = "block"
}

//按钮文案修改逻辑
function changeButtonText() {
  const btn = document.getElementById("open")
  btn.innerText = "快去登录"
}

// 按钮置灰逻辑
function disableButton() {
  const btn = document.getElementById("open")
  btn.setAttribute("disabled", true)
}

//新版本功能逻辑整合
function changeButtonStatus() {
  changeButtonText()
  disableButton()
}

document.getElementById("open").addEventListener("click", function () {
  openModal()
  changeButtonStatus()
})

//class版本
// 定义打开按钮
class OpenButton {
  // 点击后展示弹框（旧逻辑）
  onClick() {
    const modal = new Modal()
    modal.style.display = "block"
  }
}

// 定义按钮对应的装饰器
class Decorator {
  // 将按钮实例传入
  constructor(open_button) {
    this.open_button = open_button
  }

  onClick() {
    this.open_button.onClick()
    // “包装”了一层新逻辑
    this.changeButtonStatus()
  }

  changeButtonStatus() {
    this.changeButtonText()
    this.disableButton()
  }

  disableButton() {
    const btn = document.getElementById("open")
    btn.setAttribute("disabled", true)
  }

  changeButtonText() {
    const btn = document.getElementById("open")
    btn.innerText = "快去登录"
  }
}

const openButton = new OpenButton()
const decorator = new Decorator(openButton)

document.getElementById("open").addEventListener("click", function () {
  // openButton.onClick()
  // 此处可以分别尝试两个实例的onClick方法，验证装饰器是否生效
  decorator.onClick()
})
