import React from "react"

class Test extends React.Component{
  // 如果数据是组件的状态需要去影响视图 定义到state中
  // 而如果我们需要的数据状态 不和视图绑定 定义成一个普通的实例属性就可以了
  // state中尽量保持精简
  timer = null
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log(1)
    }, 1000);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    // 清理定时器
    clearInterval(this.timer)
  }
  render(){
    return (
      <>
        <div>Test</div>
      </>
    )
  }
}

class App extends React.Component {
  constructor() {
    super()
    console.log('constructor')
  }
  state = {
    count: 0,
    flag: true
  }
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
      flag: !this.state.flag
    })
  }
  componentDidMount() {
    console.log('componentDidMount')
    // 类似于mounted
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  render() {
    console.log('render')
    return (
      <>
        <div>this is App</div>
        <div>{this.state.count}</div>
        <button onClick={this.clickHandler}>点我加一</button>
        {this.state.flag ? <Test></Test> : null}
      </>
    )
  }
}

export default App
