// 样式控制
// 1、行内样式 - 在元素身上绑定一个style属性即可,需要使用驼峰fontSize。可以提取出来一个变量，表达式内使用这个变量
// 2、类名样式 - 在元素身上绑定一个className属性即可
import './app.css'
const style = {
  color: 'red',
  fontSize: '30px'
}
function App() {
  return(
    <div className="App">
      <span style={style}>this is span1</span>
      <span style={{ color: 'red', fontSize: '30px' }}>this is span2</span>
      <span className='active'>测试类名样式</span>
    </div>
  )
}

export default App;
