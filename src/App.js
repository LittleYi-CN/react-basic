import React from "react"

class App extends React.Component {
  constructor() {
    super()
    console.log('constructor')
  }
  state = {
    count: 0
  }
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  componentDidMount() {
    console.log('componentDidMount')
    // 类似于mounted
  }
  render() {
    console.log('render')
    return (
      <>
        <div>this is App</div>
        <div>{this.state.count}</div>
        <button onClick={this.clickHandler}>点我加一</button>
      </>
    )
  }
}

export default App
