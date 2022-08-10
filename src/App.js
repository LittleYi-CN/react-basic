import { useState } from "react";

function getDefaultValue() {
  for(let i = 0; i < 10000; i++) {

  }
  return 10
}

function Counter(props) {
  const [count, setCount] = useState(() => {
    // 这里目的为了体现初始值通过一定的计算
    // 这个计算比较广义的概念
    // 只要无法直接确定 需要通过一定的操作才能获取 就可以理解为计算
    return getDefaultValue()
  })
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  )
}

function App() {
  return (
    <>
      <Counter count={10}/>
      <Counter count={20}/>
    </>
  )
}

export default App
