import {createContext, useContext, useState} from 'react'

const Context = createContext()


function ComA() {
  const count = useContext(Context)
  return (
    <>
      <div>this is A</div>
      app传过来的数据为： {count}
      <ComC />
    </>
  )
}

function ComC() {
  const count = useContext(Context)
  return (
    <>
      <div>this is C</div>
      app传过来的数据为： {count}
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <Context.Provider value={count}>
      <ComA />
      <button onClick={() => setCount(count + 1)}>修改count值</button>
    </Context.Provider>
  )
}

export default App
