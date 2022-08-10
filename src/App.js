import { useContext } from 'react'

import Context from './context'
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
  return (
      <ComA />
  )
}

export default App
