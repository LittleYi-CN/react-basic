import React from "react"

// this 有问题的写法
class Test extends React.Component {
  handler() {
    console.log(this)
  }
  render() {
    console.log('父函数中的this指向为：', this)
    return (
      <button onClick={() => this.handler()}>点我查看this</button>
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
