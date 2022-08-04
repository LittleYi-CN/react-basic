import React, { createContext } from "react"
// App -> A -> B
// App数据 -> C
// 1.导入createContext方法并执行，结构提供者和消费者

const { Provider, Consumer } = createContext()

function ComA() {
  return (
    <>
      <div>this is A</div>
      <ComB />
    </>
  )
}

function ComB() {
  return (
    <>
      <div>this is B</div>
      {/* 通过Consumer使用数据 */}
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
    </>
  )
}

class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render() {
    return (
      // 2. 使用Provider包裹根组件
      <Provider value={this.state.message}>
        <ComA />
      </Provider>
    )
  }
}

export default App
