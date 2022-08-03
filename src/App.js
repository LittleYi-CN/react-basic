import React from "react"

class State extends React.Component {
  state = {
    count: 1,
    list: [1,2,3],
    person: {
      name: 'jack',
      age: 18
    }
  }
  handleClick = () => {
    this.setState({
      count: this.state.count +1,
      list: [ ...this.state.list, 4,5 ],
      person: {
        ...this.state.person,
        name: 'rose',
        age: 19
      }
    })
    this.setState({
      list: this.state.list.filter(item => item !== 2)
    })
  }
  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div>name: {this.state.person.name}</div>
        <div>age: {this.state.person.age}</div>
        <button onClick={this.handleClick}>changeState</button>
      </>
    )
  }
}
function App () {
  return (
    <>
      <State></State>
    </>
  )
}

export default App
