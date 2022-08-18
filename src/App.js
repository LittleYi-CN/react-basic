import { useStore } from './store'
// 2. 引入中间件链接mobx和react完成响应式变化
import {observer} from 'mobx-react-lite'
function App() {
  // 注意：解构赋值到store实例对象就可以了
  // 防止破坏响应式 用哪个store就解构哪个store
  const {counterStore, listStore} = useStore()
  return (
    <>
      <div>{counterStore.count}</div>
      <button onClick={counterStore.addCount}>+</button>
      <ul>
        {listStore.list.map(item => <li key={item}>{item}</li>)}
      </ul>
      <div>
        <button onClick={listStore.addList}>增加课程</button>
      </div>
    </>
  )
}
// 3. 包裹App
export default observer(App)
