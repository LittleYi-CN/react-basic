import React from "react"

// this 有问题的写法
class Test extends React.Component {
  constructor() {
    super()
    // 使用bind强行修正this
    // 相当于再类组件初始化的阶段 就可以把回调函数的this修正到
    // 永远指向当前组件实例对象
    this.handler = this.handler.bind(this)
  }
  handler() {
    console.log(this)
  }
  render() {
    return (
      <button onClick={this.handler}>点我查看this</button>
    )
  }
}
function App () {
  return (
    <>
    <Test></Test>
    </>
  )
}

export default App
