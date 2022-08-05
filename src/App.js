// useState
// 1. 导入useState函数 react
// 2. 执行这个函数并且传入初始值 必须在函数组件中
// 3. [数据，修改数据的方法]
// 4. 使用数据 修改数据

import {useState} from 'react'

function App() {
  const [la,setLa] = useState(0)
  return (
    <>
      <button onClick={() => setLa(la + 1)}>{la}</button>
    </>
  )
}

export default App
