// 条件渲染
// 技术方案：1、三元表达式(常用) 2、逻辑&&运算

// 1、三元表达式 - 满足条件才渲染一个span标签
// const flag = true;
// function App() {
//   return(
//     <div className="App">
//       { flag ? (
//         <div>
//           <span>this is span</span>
//         </div>) : null }
//     </div>
//   )
// }
// 2、逻辑 && 运算
function App() {
  return(
    <div className="App">
      { true && <span>this is another span</span> }
    </div>
  )
}

export default App;
