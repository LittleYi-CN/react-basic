import React, { createRef } from "react"

class Input extends React.Component {
  msgRef = createRef()
  getValue = () => {
    console.log(this.msgRef.current.value)
  }
  render() {
    return (
      <>
        <input
          type='text'
          ref={this.msgRef}
          />
        <div>
          <button onClick={this.getValue}>点我获取input值</button>
        </div>
      </>
    )
  }
}
function App () {
  return (
    <>
      <Input></Input>
    </>
  )
}

export default App
