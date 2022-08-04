import React from "react"

// 函数式的son
function SonF(props) {
  console.log(props)
  return (
    <>
      <div>函数子组件, {props.msg}</div>
      <div>父组件的list{props.list.map(item => <p key={item}>{item}</p>)}</div>
      <div>{props.userInfo.name}</div>
      <div>{props.userInfo.age}</div>
      <button onClick={() => props.getMsg()}>执行父组件中的函数</button>
      {props.child}
    </>
  )
}

// 类组件的son
class SonC extends React.Component {
  render() {
    return (
      <>
        <div>类子组件, {this.props.msg}</div>
        <ul>
          {this.props.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div>{this.props.userInfo.name}</div>
        <div>{this.props.userInfo.age}</div>
        <button onClick={() => this.props.getMsg()}>执行父组件中的函数</button>
        {this.props.child}
      </>
    )
  }
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
        <SonC
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
