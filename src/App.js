// 1. 导入counterStore
import {counterStore} from './store/counter'
// 2. 引入中间件链接mobx和react完成响应式变化
import {observer} from 'mobx-react-lite'
function App() {
  return (
    <>
      {/* 把store中的count渲染一下 */}
      {counterStore.count}
      {/* 点击事件触发action函数修改count */}
      <button onClick={counterStore.addCount}>+</button>
      <div>
        {/* 使用计算属性 */}
        <ul>
         {counterStore.filterList.map((item) => (<li>{item}</li>))}
        </ul>
      </div>
      <button onClick={counterStore.addList}>修改数组</button>
    </>
  )
}
// 3. 包裹App
export default observer(App)
