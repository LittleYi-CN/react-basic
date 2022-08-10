// React: 框架的核心包
// ReactDom: 专门做渲染相关的包

import React from 'react';
import ReactDOM from 'react-dom/client';
// 应用的全局样式文件
import './index.css';
// 引入根组件
import App from './App';
import Context from './context'
// Context如果要传递的护具 只需要在整个应用初始化的时候传递一次就可以
// 就可以选择在当前文件里做数据提供

// 如果Context需要传递数据并且将来还需要再对数据做修改 底层组件也需要跟着一起变
// 写道app.js


// 渲染根组件App 到一个id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式节点需要去掉
  // 会影响useEffect的执行时机
  <Context.Provider value={100}>
    <App />
  </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vi
