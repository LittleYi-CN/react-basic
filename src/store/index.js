// 组合子模块
// 封装统一导出的供业务使用的方法
import {ListStore} from './list.Store'
import {CounterStore} from './counter.Store'
import React from 'react'

// 1. 声明一个rootStore
class RootStore {
  constructor() {
    // 对子模块进行实例化操作
    // 将来实例化根Store时
    // 根store又两个属性 分别时counterStore 和 listStore
    // 各自对应的值 就是我们导入的子模块实例对象
    this.counterStore = new CounterStore()
    this.listStore = new ListStore()
  }
}

// 实例化操作
const rootStore = new RootStore()
// 使用react context机制 完成统一方法封装
// Provider value={传递的数据}
// 查找机制：useContext 优先从Provider value找 如果找不到 就会找
// createContext方法传递过来的默认参数
const context = React.createContext(rootStore)
// 这个方法作用：通过useContext拿到rootStore实例对象，然后返回
// 只要在业务组件中 调用useStore() -> rootStore
const useStore = () => React.useContext(context)

export {useStore}