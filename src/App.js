// 动态类名控制
// 动态控制一下active类名 满足条件才有
import './app.css'
const activeFlag = false;
function App() {
  return(
    <div className="App">
      <span className={ activeFlag ? 'active' : '' }>测试类名样式</span>
    </div>
  )
}

export default App;
