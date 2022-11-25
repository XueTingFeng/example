import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import action from './action.js'

@connect
class App extends Component {
  render(){
    // App的业务逻辑
  }
}

function mapStateToProps(state){
  return state.app
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(action, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)