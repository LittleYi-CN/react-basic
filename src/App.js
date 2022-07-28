// 有一个状态type 1 2 3
// 1 -> h1
// 2 -> h2
// 3 -> h3
// 原则：模板中的逻辑尽量保持精简
// 复杂的多分枝的逻辑 收敛为一个函数 通过一个专门的函数来写分支逻辑 模板中只调用函数
const getHTag =(type) => {
  if(type === 1) {
    return <h1>this is h1</h1>
  }

  if(type === 2) {
    return <h2>this is h2</h2>
  }

  if(type === 3) {
    return <h3>this is h3</h3>
  }
}
function App() {
  return(
    <div className="App">
      { getHTag(1) }
    </div>
  )
}

export default App;
