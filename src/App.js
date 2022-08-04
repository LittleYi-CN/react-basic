import React from "react"

// 普通文本
// function ListItem({children}) {
//   return(
//     <>
//       <div>this is ListItem</div>
//       <div>{children}</div>
//     </>
//   )
// }

// 普通标签
// function ListItem({children}) {
//   return (
//     <>
//       <div>this is ListItem</div>
//       {children}
//     </>
//   )
// }

// 函数
// function ListItem({children}) {
//   children()
//   return (
//     <>
//       <div>this is ListItem</div>
//     </>
//   )
// }

// JSX
function ListItem({children}) {
  return (
    <>
      <div>this is ListItem</div>
      {children}
    </>
  )
}

// 数据提供者 渲染ListItem组件 App-ListItem
// 先不抽离组件 完成基础渲染后再去抽离
class App extends React.Component {
  render() {
    return (
      <>
        <ListItem>
          {/* this is children */}
          {/* <div>this is children</div> */}
          {/* {() => console.log('函数')} */}
          {<h1>this is children</h1>}
        </ListItem>
      </>
    )
  }
}

export default App
