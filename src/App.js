import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Article from './Article'
import Board from './Board'

import Layout from "./Layout"
import Login from './Login'

function App() {
  return (
    <>
      <div>App</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* 定义二级路由嵌套 */}
            {/* 默认路由 添加index属性 把自己的path干掉 */}
            <Route index element={<Board />}></Route>
            <Route path='article' element={<Article />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
