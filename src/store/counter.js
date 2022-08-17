// 编写第一个mobx store小案例
import { makeAutoObservable } from 'mobx'
class CounterStore {
  // 1. 定义数据
  count = 0
  constructor() {
    // 2. 把数据弄成响应式
    makeAutoObservable(this)
  }
  // 3. 定义action函数（修改数据）
  addCount = () => {
    this.count ++
  }
}

// 4. 实例化 然后导出给react使用
const counterStore = new CounterStore()

export { counterStore }
