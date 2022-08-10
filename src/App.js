import React, { useEffect, useRef } from "react"

class TestC extends React.Component {
  state = {
    name: 'yi'
  }
  test = () => {
    console.log('test')
  }
  render() {
    return (
      <>
        <div>this is TestC</div>
      </>
    )
  }
}

function App() {
  const testRef = useRef(null)
  const h1Ref = useRef(null)
  useEffect(() => {
    console.log(testRef.current)
    console.log(h1Ref.current)
  })
  return (
    <>
      <TestC ref={testRef} />
      <h1 ref={h1Ref}>this is h1</h1>
    </>
  )
}

export default App
