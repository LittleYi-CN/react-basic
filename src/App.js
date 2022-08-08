
import {useState} from 'react'

function App() {
  const [count,setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  const [list, setList] = useState([])
  function test() {
    setCount(count + 1)
    setFlag(false)
    setList([1,2,3])
  }
  return (
    <>
      <div>count:{count}</div>
      <div>flag:{flag}</div>
      <ul>
        <li>list</li>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
      <button onClick={test}>change</button>
    </>
  )
}

export default App
