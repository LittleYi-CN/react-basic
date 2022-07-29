// 函数组件的创建和渲染
function Hello () {
  const clickHandler = (e) => {
    e.preventDefault()
    console.log(e)
    console.log('函数组件事件被触发')
  }
  return <div><a onClick={clickHandler} href='https://www.baidu.com'>百度一下</a></div>
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
