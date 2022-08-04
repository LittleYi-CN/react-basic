import React from "react"
// Son 子组件
// 父传子 props 函数
// 子传父：子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参传入即可
function Son({getSonMsg}) {
  return (
    <>
      <div>this is son</div>
      <button onClick={() => getSonMsg('子组件的数据')}>传给父亲的数据</button>
    </>
  )
}

// App父组件
class App extends React.Component {
  // 1、准备一个函数 传给子组件
  getSonMsg = (sonMsg) => {
    console.log(sonMsg)
  }
  render() {
    return (
      <>
        <Son getSonMsg={this.getSonMsg} />
      </>
    )
  }
}

export default App
