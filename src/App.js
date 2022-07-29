// 函数组件的创建和渲染
// 如何传递自定义参数?
// 1、只需要一个额外参数 {clickHandler} -> {() => clickHandler('自定义的参数')}
// 2、既需要e也需要额外参数 {(e) => clickHandler(e, '自定义参数')}
function Hello () {
  const clickHandler = (e, msg) => {
    console.log('函数组件事件被触发', e, msg)
  }
  return <div onClick={(e) => clickHandler(e, 'this is msg')}>click me</div>
}
function App () {
  return (
    <>
      {/* 渲染函数组件 */}
      <Hello></Hello>
    </>
  )
}

export default App
