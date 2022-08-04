import React from "react"
// 目标：B组件中的数据传给A
// 技术方案：
// 1、先把B中的数据通过子传父 传给App
// 2、再把App接收到的Son中的数据 通过父传子 传给A

function SonA({bMsg}) {
  return (
    <>
      <div>this is A</div>
      <div>{bMsg}</div>
    </>
  )
}

function SonB({getMsg}) {
  const bMsg = '这是B组件中的数据'
  function clickHandler() {
    getMsg(bMsg)
  }
  return (
    <>
      <div>this is B</div>
      <button onClick={clickHandler}>B发送数据</button>
    </>
  )
}

class App extends React.Component {
  state = {
    bMsg: ''
  }
  // 声明一个传给B组件的方法
  getMsg = (msg) => {
    this.setState({
      bMsg: msg
    })
  }
  render() {
    return (
      <>
        <SonA bMsg={this.state.bMsg} />
        <SonB getMsg={this.getMsg} />
      </>
    )
  }
}

export default App
