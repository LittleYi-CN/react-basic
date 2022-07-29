import React from "react"

class Counter extends React.Component {
  state = {
    count: 0
  }
  handleCounter = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render () {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.handleCounter}>点我加1</button>
      </>
    )
  }
}
function App () {
  return (
    <>
      <Counter></Counter>
    </>
  )
}

export default App
