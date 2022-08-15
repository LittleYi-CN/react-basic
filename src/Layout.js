import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div>Layout</div>
      {/* 定义二级路由出口 */}
      <Outlet />
    </>
  )
}

export default Layout