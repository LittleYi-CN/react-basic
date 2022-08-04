import React from "react"
// Son 子组件
// 父传子 props 函数
// 子传父：子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参传入即可
// function Son({getSonMsg}) {
//   function clickHandler() {
//     getSonMsg('这里是子组件传递的数据')
//   }
//   return (
//     <>
//       <div>this is son</div>
//       <button onClick={clickHandler}>传给父亲的数据</button>
//     </>
//   )
// }
class Son extends React.Component {
  clickHandler = () => {
    const msg = '这是子组件的数据lala'
    this.props.getSonMsg(msg)
  }
  render() {
    return (
      <>
        <div>这是子组件</div>
        <button onClick={this.clickHandler}>子传父</button>
      </>
    )
  }
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
