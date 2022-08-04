import React from "react"

class Test extends React.Component {
  static defaultProps = {
    pageSize: 10
  }
  render() {
    return (
      <>
        <div>this is Test</div>
        {this.props.pageSize}
      </>
    )
  }
}

// Test.defaultProps = {
//   pageSize: 10
// }

class App extends React.Component {
  render() {
    return (
      <>
        <Test pageSize={20} />
      </>
    )
  }
}

export default App
