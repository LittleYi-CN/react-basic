import React from "react"

// 组件状态 类组件作为演示
class TestComponent extends React.Component {
  // 1、定义组件状态
  state = {
    // 在这里可以定义各种属性 全都是当前组件的状态
    name: 'yi'
  }
  // 事件回调函数
  changeName = () => {
    // 3、修改state中的状态name
    // 注意:不可以直接做赋值修改 必须通过一个方法 setState
    this.setState({
      name: 'qi'
    })
  }
  render () {
    // 2、使用状态
    return (
      <>
        <div>this is TextComponent</div>
        <div>name is {this.state.name}</div>
        <button onClick={this.changeName}>点我修改</button>
      </>
    )
  }
}
function App () {
  return (
    <>
      <TestComponent></TestComponent>
    </>
  )
}

export default App
