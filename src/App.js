import React from "react"

// 函数式的son
function SonF(props) {
  return (
    <div>函数子组件, {props.msg}</div>
  )
}

// 类组件的son
class SonC extends React.Component {
  render() {
    return (
      <div>类子组件, {this.props.msg}</div>
    )
  }
}

// App 父组件 Son 子组件
class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render() {
    return (
      <>
        {/* 子组件身上绑定属性 属性名可以自定义 保持语义化 */}
        <SonF msg={this.state.message} />
        <SonC msg={this.state.message} />
      </>
    )
  }
}

export default App
