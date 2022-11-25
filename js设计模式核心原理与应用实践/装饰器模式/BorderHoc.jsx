import React, { Component } from 'react'

const BorderHoc = (WrappedComponent) => class extends Component {
  render() {
    return <div style={{border: 'solid 1px red'}}>
      <WrappedComponent/>
    </div>
  }
}

@BorderHoc
class TargetComponent extends Component {
  render(){
    // 目标组件具体的业务逻辑
  }
}

export default TargetComponent
