import React from 'react'
// 函数组件的创建和渲染
function Hello () {
  function clickHandler () {
    console.log('函数组件事件被触发')
  }
  return <div onClick={clickHandler}>Hello</div>
}
// 类组件的创建和渲染
// 创建
class HelloComponent extends React.Component {
  clickHandler () {
    console.log('组件事件被触发')
  }
  render () {
    return <div onClick={this.clickHandler}>this is class component</div>
  }
}
// 渲染 <HelloComponent/> 或者 <HelloComponent></HelloComponent>
function App () {
  return (
    <>
      {/* 渲染函数组件 */}
      <Hello></Hello>
      <Hello />
      {/* 渲染HelloComponent组件 */}
      <HelloComponent></HelloComponent>
      <HelloComponent />
    </>
  )
}

export default App
