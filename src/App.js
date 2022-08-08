
import {useState, useEffect} from 'react'
// 在修改数据之后 把count值放到页面标题中
// 1. 导入useEffect函数
// 2. 在函数组件中执行 传入回调 并且定义副作用
// 3. 当通过修改状态更新组件时，副作用也会不断执行

function App() {
  const [count,setCount] = useState(0)
  const [name, setName] = useState('yi')
  useEffect(() => {
    console.log('我执行了')
    document.title = count
  }, [count])
  return (
    <>
      <div>count:{count}</div>
      <button onClick={() => setCount(count + 1)}>change</button>
      <button onClick={() => setName('q')}>{name}</button>
    </>
  )
}

export default App
