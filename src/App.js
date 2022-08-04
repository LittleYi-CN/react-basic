import React from "react"

// 函数式的son
function SonF(props) {
  const { msg, list, userInfo, getMsg, child } = props
  return (
    <>
      <div>函数子组件, {msg}</div>
      <div>父组件的list{list.map(item => <p key={item}>{item}</p>)}</div>
      <div>{userInfo.name}</div>
      <div>{userInfo.age}</div>
      <button onClick={() => getMsg()}>执行父组件中的函数</button>
      {child}
    </>
  )
}
function SonF2({ msg, list, userInfo, getMsg, child }) {
  return (
    <>
      <div>函数子组件, {msg}</div>
      <div>父组件的list{list.map(item => <p key={item}>{item}</p>)}</div>
      <div>{userInfo.name}</div>
      <div>{userInfo.age}</div>
      <button onClick={() => getMsg()}>执行父组件中的函数</button>
      {child}
    </>
  )
}

// App 父组件 Son 子组件
class App extends React.Component {
  state = {
    message: 'this is message',
    list: [1,2,3],
    userInfo: {
      name: 'yi',
      age: 27
    }
  }
  getMsg = () => {
    console.log(this.state.message)
  }
  render() {
    return (
      <>
        <div>父组件</div>
        {/* 子组件身上绑定属性 属性名可以自定义 保持语义化 */}
        <SonF
          msg={this.state.message}
          list={this.state.list}
          userInfo={this.state.userInfo}
          getMsg={this.getMsg}
          child={<span>this is span</span>}
          />
        <SonF2
          msg={this.state.message}
          list={this.state.list}
          userInfo={this.state.userInfo}
          getMsg={this.getMsg}
          child={<span>this is span</span>}
          />
      </>
    )
  }
}

export default App
