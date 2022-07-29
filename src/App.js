// 函数组件的创建和渲染
// 创建
function Hello () {
  return <div>Hello</div>
}
// 渲染 <Hello/> 或者 <Hello></Hello>
function App () {
  return (
    <>
      {/* 渲染Hello组件 */}
      <Hello />
      <Hello></Hello>
    </>
  )
}

export default App
