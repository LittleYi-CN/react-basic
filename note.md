## 1、表达式使用

```
// 1、识别常规的变量
// 2、原生方法调用
// 3、三元运算符
const name = 'yiyiyi';
const getAge = () => {
  return 18;
}
const flag = false;

function App() {
  return (
    <div className="App">
      { name }
      { getAge() }
      { flag ? '可以' : '菜鸡' }
    </div>
  );
}
```

## 2、列表渲染

```
// react如何完成列表渲染
// 技术方案: map 重复渲染的是哪个模板 就return谁
// 注意事项：遍历列表时同样需要一个类型为number/string不可重复的key 提高diff性能
// key仅仅在react框架内部使用，不会出现在真实的dom中
const songs = [
  { id: 1, name: '夜的第七章' },
  { id: 2, name: '彩虹' },
  { id: 3, name: '夜曲' }
]

function App() {
  return(
    <div className="App">
      <ul>
        { songs.map(song => <li key={song.id}>{song.name}</li>) }
      </ul>
    </div>
  )
}
```

## 3、条件渲染

技术方案：

1. 三元表达式(常用)
2. 逻辑&&运算

```
// 1、三元表达式 - 满足条件才渲染一个span标签
const flag = true;
function App() {
  return(
    <div className="App">
      { flag ? (
        <div>
          <span>this is span</span>
        </div>) : null }
    </div>
  )
}
```

```
// 2、逻辑 && 运算
function App() {
  return(
    <div className="App">
      { true && <span>this is another span</span> }
    </div>
  )
}
```

## 4、模板精简原则

- 原则：模板中的逻辑尽量保持精简。
- 复杂的多分枝的逻辑 收敛为一个函数 通过一个专门的函数来写分支逻辑 模板中只调用函数。

```
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
```

## 5、样式控制

两种样式

1. 行内样式
   - 在元素身上绑定一个 style 属性即可,需要使用驼峰 fontSize。
2. 类名样式
   - 在元素身上绑定一个 className 属性即可

#### 1、行内样式

在元素身上绑定一个 style 属性即可,需要使用驼峰 fontSize。

```
function App() {
  return(
    <div className="App">
      <span style={{ color: 'red', fontSize: '30px' }}>this is span</span>
    </div>
  )
}
```

style 使用两个{{}}是因为外层的就是 react 的表达式所要使用的{},内层的{}表明是个对象。如果样式复杂可以将内部对象提取出来一个变量，直接引用变量。

```
const style = { color: 'red', fontSize: '30px' }
function App() {
  return(
    <div className="App">
      <span style={style}>this is span</span>
    </div>
  )
}
```

#### 2、类名样式

在元素身上绑定一个 className 属性即可。

新建 app.css

```
.active {
  color: blue;
}
```

app.js 中引用此样式，在模板中使用 className 即可，注意是 className 不是 class

```
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
```

## 6、动态类名控制

使用三元表达式即可

```
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
```

## 7、jsx - 注意事项

1. JSX 必须有一个根节点，如果没有根节点，可以使用<></>(幽灵节点)替代
2. 所有标签必须形成闭合，成对闭合或者自闭合都可以
3. JSX 中的语法更加贴近 JS 语法，属性名采用驼峰命名法 class -> className for -> htmlFor
4. JSX 支持多行(换行)，如果需要换行，需使用()包裹，防止 bug 出现。

```
<!-- 注意事项 1 -->
function App() {
  return(
    <>
    <div className="App">
      <span>幽灵节点测试</span>
    </div>
    <div>幽灵节点测试</div>
    </>
  )
}
```

## 8、开发工具和格式化代码

目标任务: 基于 vscode 配置格式化工具，提高开发效率

1. 安装 vsCode prettier 插件
2. 修改配置文件 setting.json

```
{
  "git.enableSmartCommit": true,
  // 修改注释颜色
  "editor.tokenColorCustomizations": {
    "comments": {
      "fontStyle": "bold",
      "foreground": "#82e0aa"
    }
  },
  // 配置文件类型识别
  "files.associations": {
    "*.js": "javascript",
    "*.json": "jsonc",
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "extensions.ignoreRecommendations": false,
  "files.exclude": {
    "**/.DS_Store": true,
    "**/.git": true,
    "**/.hg": true,
    "**/.svn": true,
    "**/CVS": true,
    "**/node_modules": false,
    "**/tmp": true
  },
  // "javascript.implicitProjectConfig.experimentalDecorators": true,
  "explorer.confirmDragAndDrop": false,
  "typescript.updateImportsOnFileMove.enabled": "prompt",
  "git.confirmSync": false,
  "editor.tabSize": 2,
  "editor.fontWeight": "500",
  "[json]": {},
  "editor.tabCompletion": "on",
  "vsicons.projectDetection.autoReload": true,
  "editor.fontFamily": "Monaco, 'Courier New', monospace, Meslo LG M for Powerline",
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "editor.fontSize": 16,
  "debug.console.fontSize": 14,
  "vsicons.dontShowNewVersionMessage": true,
  "editor.minimap.enabled": true,
  "emmet.extensionsPath": [
    ""
  ],
  // vue eslint start 保存时自动格式化代码
  "editor.formatOnSave": true,
  // eslint配置项，保存时自动修复错误
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "vetur.ignoreProjectWarning": true,
  // 让vetur使用vs自带的js格式化工具
  // uni-app和vue 项目使用
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "javascript.format.semicolons": "remove",
  // // 指定 *.vue 文件的格式化工具为vetur
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  // // 指定 *.js 文件的格式化工具为vscode自带
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  // // 默认使用prettier格式化支持的文件
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.jsxBracketSameLine": true,
  // 函数前面加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "prettier.singleQuote": true,
  "prettier.semi": false,
  // eslint end
  // react
  // 当按tab键的时候，会自动提示
  "emmet.triggerExpansionOnTab": true,
  "emmet.showAbbreviationSuggestions": true,
  "emmet.includeLanguages": {
    // jsx的提示
    "javascript": "javascriptreact",
    "vue-html": "html",
    "vue": "html",
    "wxml": "html"
  },
  // end
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  // @路径提示
  "path-intellisense.mappings": {
    "@": "${workspaceRoot}/src"
  },
  "security.workspace.trust.untrustedFiles": "open",
  "git.ignoreMissingGitWarning": true,
  "window.zoomLevel": 1
}
```

## 9、综合案例练习

## 10、组件-概念理解

`目标任务：`能够独立使用函数完成 react 组件的创建和渲染。

### 概念

> 使用 JS 的函数(或箭头函数)创建的组件，就叫做`函数组件`

## 11、组件-函数组件的创建和渲染

```
// 函数组件的创建和渲染
// 创建
function Hello () {
  return <div>Hello</div>
}
// 渲染 <Hello/> 或者 <Hello></Hello>
function App () {
  return (
    <>
      {/* 渲染Hello组件 */}
      <Hello />
      <Hello></Hello>
    </>
  )
}
```

**约定说明**

1. 组件的名称**必须首字母大写**，react 内部回根据这个来判断是组件还是普通的标签
2. 函数组件**必须有返回值**，表示该组件的 UI 结构；如果不需要渲染任何内容，则返回 null
3. 组件就像 HTMl 标签一样可以被渲染到页面中。组件表示的是一段结构内容，对于函数组件来说，渲染的内同是函数的**返回值**就是对应的内容
4. 使用函数名称作为组件标签名称，可以成对出现也可以自闭合

## 12、组件-类组件的创建和渲染

> 使用 ES6 的 class 创建的组件，叫做类(class)组件
> **组件的定义和渲染**

```
import React from 'react'
// 类组件的创建和渲染
// 创建
class HelloComponent extends React.Component {
  render () {
    return <div>this is class component</div>
  }
}
// 渲染 <HelloComponent/> 或者 <HelloComponent></HelloComponent>
function App () {
  return (
    <>
      {/* 渲染HelloComponent组件 */}
      <HelloComponent></HelloComponent>
      <HelloComponent />
    </>
  )
}
```

**约定说明**

1. **类名称也必须以大写字母开头**
2. 类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性
3. 类组件必须提供 render 方法**render 方法必须有返回值，表示该组件的 UI 结构**

## 13、组件-事件绑定

**如何绑定事件**

- 语法
  - on + 事件名称 = {事件处理程序}，比如：<div onClick={() => {}}></div>
- 注意点
  - react 事件采用驼峰命名法，比如：onMouseEnter、onFocus

```
import React from 'react'
// 函数组件的创建和渲染
function Hello () {
  const clickHandler = () => {
    console.log('函数组件事件被触发')
  }
  return <div onClick={clickHandler}>Hello</div>
}
// 类组件的创建和渲染
// 创建
class HelloComponent extends React.Component {
  clickHandler () {
    console.log('组件事件被触发')
  }
  render () {
    return <div onClick={this.clickHandler}>this is class component</div>
  }
}
// 渲染 <HelloComponent/> 或者 <HelloComponent></HelloComponent>
function App () {
  return (
    <>
      {/* 渲染函数组件 */}
      <Hello></Hello>
      <Hello />
      {/* 渲染HelloComponent组件 */}
      <HelloComponent></HelloComponent>
      <HelloComponent />
    </>
  )
}
```

## 14、组件-事件对象 e 说明

- 通过事件处理程序的参数获取事件对象 e

```
// 函数组件的创建和渲染
function Hello () {
  const clickHandler = (e) => {
    e.preventDefault()
    console.log(e)
    console.log('函数组件事件被触发')
  }
  return <div><a onClick={clickHandler} href='https://www.baidu.com'>百度一下</a></div>
}
function App () {
  return (
    <>
      {/* 渲染函数组件 */}
      <Hello></Hello>
    </>
  )
}
```

## 15、组件-事件绑定传递额外参数

- 只需要一个额外参数
  - {clickHandler} -> {() => clickHandler('自定义的参数')}
- 既需要 e 也需要额外参数
  - {clickHandler} -> {(e) => clickHandler(e, '自定义参数')}

```
// 函数组件的创建和渲染
// 如何传递自定义参数?
// 1、只需要一个额外参数 {clickHandler} -> {() => clickHandler('自定义的参数')}
// 2、既需要e也需要额外参数 {(e) => clickHandler(e, '自定义参数')}
function Hello () {
  const clickHandler = (e, msg) => {
    console.log('函数组件事件被触发', e, msg)
  }
  return <div onClick={(e) => clickHandler(e, 'this is msg')}>click me</div>
}
function App () {
  return (
    <>
      {/* 渲染函数组件 */}
      <Hello></Hello>
    </>
  )
```

## 16、状态的定义和使用

> 一个前提：在 react hook 出现之前，函数式组件是没有自己的状态的，所以统一通过类组件来实现  
> 步骤：初始化状态 -> 读取状态 -> 修改状态 -> 影响视图

1. 初始化状态

- 通过 class 的实例属性 state
- state 的值是一个对象结构,表示一个组件可以有多个数据状态

2. 读取状态

- 通过 this.state 来获取状态

```
import React from "react"

// 组件状态 类组件作为演示
class TestComponent extends React.Component {
  // 1、定义组件状态
  state = {
    // 在这里可以定义各种属性 全都是当前组件的状态
    name: 'yi'
  }
  // 事件回调函数
  changeName = () => {
    // 3、修改state中的状态name
    // 注意:不可以直接做赋值修改 必须通过一个方法 setState
    this.setState({
      name: 'qi'
    })
  }
  render () {
    // 2、使用状态
    return (
      <>
        <div>this is TextComponent</div>
        <div>name is {this.state.name}</div>
        <button onClick={this.changeName}>点我修改</button>
      </>
    )
  }
}
function App () {
  return (
    <>
      <TestComponent></TestComponent>
    </>
  )
}
```

## 17、组件-状态定义修改注意事项

1. 编写组件其实就是编写原生 js 类或者函数
2. 定义状态必须通过 state 实例属性的方法 提供一个对象 名称是固定的就叫做 state
3. 修改 state 中的任何属性 都不可以通过直接赋值 必须走 setState 方法 这个方法来自于继承得到
4. 这里的 this 关键词 很容易出现指向错误的问题 上面的写法是最推荐和最规范的 没有 this 指向问题

## 18、状态修改 counter 案例

```
import React from "react"

class Counter extends React.Component {
  state = {
    count: 0
  }
  handleCounter = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render () {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.handleCounter}>点我加1</button>
      </>
    )
  }
}
function App () {
  return (
    <>
      <Counter></Counter>
    </>
  )
}
```

## 19、组件-this 的指向问题说明
如果不使用es6的箭头函数，需要手动绑定this，不然this为undefined
```
import React from "react"

// this 有问题的写法
class Test extends React.Component {
  constructor() {
    super()
    // 使用bind强行修正this
    // 相当于再类组件初始化的阶段 就可以把回调函数的this修正到
    // 永远指向当前组件实例对象
    this.handler = this.handler.bind(this)
  }
  handler() {
    console.log(this)
  }
  render() {
    return (
      <button onClick={this.handler}>点我查看this</button>
    )
  }
}
function App () {
  return (
    <>
    <Test></Test>
    </>
  )
}
```

## 20、组件-this指向问题再说明
- 如果不通过constructor做修正，直接可以在事件绑定的位置，通过箭头函数的写法，直接沿用父函数中的this指向也是ok的。
- 父函数指的就是render函数，render函数已经在react内部被做了修正，这里面的this就是指向当前组件实例对象，箭头函数中的this，直接沿用，所以也是指向组件的实例对象。
```
import React from "react"

// this 有问题的写法
class Test extends React.Component {
  handler() {
    console.log(this)
  }
  render() {
    console.log('父函数中的this指向为：', this)
    return (
      <button onClick={() => this.handler()}>点我查看this</button>
    )
  }
}
function App () {
  return (
    <>
      <Test></Test>
    </>
  )
}
```

## 21、知识点梳理总结