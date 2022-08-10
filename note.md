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
- React介绍
  - 用户构建用户界面(UI)的JS库，简单理解就是写页面的JS库
  - 特点
    - 声明式
      - 对比命令式
      - 声明式：what
      - 命令式：how
    - 组件化
    - 跨平台
      - 不仅可以开发web端应用
      - 还可以开发移动端安卓、ios应用 react-native
      - VR应用 react-360
  - 创建react项目 npx create-react-app 项目名称
- JSX
  - JSX是什么 在js中写HTML标签(页面结构)
  - 幽灵节点
    - <></>
    - 不额外的生产标签，可以同时渲染多个标签
  - 使用JS表达式 语法：{}
  - JS表达式
    - 特定：有值
    - 如何验证是不是表达式？技巧：能够通过console.log(表达式)打印出的内容就是表达式
  - 条件渲染
    - 三元表达式
    - 函数 + if/else
    - 逻辑与(&&)
  - 列表渲染
    - 使用数组的map方法
    - 列表渲染需要给每个元素添加key属性
    - key要唯一(number/string)
  - 样式
    - 行内样式 style={{width: 50px;}}
    - 推荐：className
- 组件基本使用
  - React的两种组件
    - 函数组件
    - 类组件
  - 两种组件的区别
    - 有没有状态
    - 函数组件，没有状态，也叫：无状态组件 负责静态结构的展示
    - class组件，有状态，也叫：有状态组件 提供状态，提供交互
  - 状态state也就是数据 数据是私有de
  - 绑定事件语法
    - on + 事件名称={事件处理程序}
      - onClick = {() => {}}
      - onClick = {this.handleClick}
      - onClick = {() => this.handleClick()}
    - onMouseEnter
    - onClick
  - 事件对象 通过事件处理程序的参数拿到事件对象
  - 事件处理程序中this指向问题
    - 推荐；使用箭头函数形式的实例方法 handleClick = () => {}
    - 在render中额外包裹一层箭头函数
    - bind

## 22、组件-状态不可变说明
> 概念：不要直接修改状态的值，而是基于当前状态创建新的状态值
1. 错误的直接修改
```
state = {
  count: 0,
  list: [1,2,3],
  person: {
    name: 'jack',
    age: 18
  }
}
<!-- 直接修改简单类型Number -->
this.state.count++
++this.state.count
this.state.count += 1
this.state.count = 1
<!-- 直接修改数组 -->
this.state.list.push(123)
this.state.list.splice(1,1)
<!-- 直接修改对象 -->
this.state.person.name = 'rose'
```
2. 基于当前状态创建新值
```
this.setState({
  count: this.state.count + 1,
  list: [...this.state.list, 4],
  person: {
    ...this.state.person,
    // 覆盖原来的属性，就可以达到修改对象中属性的目的
    name: 'rose'
  }
})
```

## 23、表单-受控组件
> **受控表单组件**  
> 什么是受控组件？  
> 受控组件就是可以`被react的状态控制的组件`  
> React组件的状态的地方是在state中，input表单元素也有自己的状态是在value中，React将state与表单元素的值(value)绑定到一起，由state的值来控制表单元素的值，从而保证单一数据源特性

**实现步骤**
1. 在组件的state中声明一个组件的状态数据
2. 将状态数据设置为input表单元素的value属性的值
3. 为input添加change事件
4. 在事件处理程序中，通过事件对象e获取到当前文本框的值(即用户当前输入的值)
5. 调用setState方法，将文本框的值作为state状态的最新值

```
import React from "react"

class InputComponent extends React.Component {
  // 1. 声明用来控制input value的react组件自己的状态
  state = {
    message: 'this is message'
  }
  // 回调函数
  inputChange = (e) => {
    // 4. 拿到输入框最新的值 交给state中的message
    this.setState({
      message: e.target.value
    })
  }
  render() {
    return (
      // 2. 给input框的value属性绑定react state
      // 3. 给input框绑定一个change的事件 为了拿到当前输入框中的数据
      <>
        <input
          type='text'
          value={this.state.message}
          onChange={this.inputChange} />
      </>
    )
  }
}
function App () {
  return (
    <>
      <InputComponent></InputComponent>
    </>
  )
}
```

## 24、表单-非受控组件
> **非受控组件**  
> 什么是非受控组件？  
> 非受控组件就是通过手动操作dom的方式获取文本框的值，文本框的状态不受react组件的state中的状态控制，直接通过原生dom获取输入框的值。

**实现步骤**
1. 导入`createRef`函数
2. 调用createRef函数，创建一个ref对象，存储到`msgRef`的实例属性中
3. 为input添加ref属性，值为`msgRef`
4. 在按钮的事件处理程序中，通过`msgRef.current`即可拿到input对应的dom元素，而其中`msgRef.current.value`拿到的就是文本框的值

```
import React, { createRef } from "react"

class Input extends React.Component {
  msgRef = createRef()
  getValue = () => {
    console.log(this.msgRef.current.value)
  }
  render() {
    return (
      <>
        <input
          type='text'
          ref={this.msgRef}
          />
        <div>
          <button onClick={this.getValue}>点我获取input值</button>
        </div>
      </>
    )
  }
}
function App () {
  return (
    <>
      <Input></Input>
    </>
  )
}
```

## 25、组件通信-通信的意义
- 组件时独立且封闭的单元，默认情况下组件**只能使用自己的数据**
- 组件化开发的过程中，完整的功能会拆分多个组件，在这个过程中不可避免的需要互相传递一些数据
- 为了能让各组件之间可以进行互相沟通，数据传递，这个过程就是组件通信

1. 父子关系 - 最重要的
2. 兄弟关系 - 自定义事件模式产生技术方法 eventBus / 通过共同的父组件通信
3. 其它关系 - mobx / redux / 基于hook的方案

## 26、组件通信-父传子-基础实现
**实现步骤**
1. 父组件提供要传递的数据 - state
2. 给子组件标签`添加属性`值为state中的数据
3. 子组件中通过`props`接收父组件中传过来的数据
   1. 类组件使用this.props获取props对象
   2. 函数式组件直接通过参数获取props对象

```
import React from "react"

// 函数式的son
function SonF(props) {
  return (
    <div>函数子组件, {props.msg}</div>
  )
}

// 类组件的son
class SonC extends React.Component {
  render() {
    return (
      <div>类子组件, {this.props.msg}</div>
    )
  }
}

// App 父组件 Son 子组件
class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render() {
    return (
      <>
        {/* 子组件身上绑定属性 属性名可以自定义 保持语义化 */}
        <SonF msg={this.state.message} />
        <SonC msg={this.state.message} />
      </>
    )
  }
}
```

## 27、组件通信-父传子-props说明
1. **props是只读对象(readonly)**
   - 根据单项数据流的要求，子组件只能读取props中的数据，不能进行修改
2. **props可以传递任意数据**
   - 数字、字符串、布尔值、数组、对象、`函数、JSX`
```
import React from "react"

// 函数式的son
function SonF(props) {
  console.log(props)
  return (
    <>
      <div>函数子组件, {props.msg}</div>
      <div>父组件的list{props.list.map(item => <p key={item}>{item}</p>)}</div>
      <div>{props.userInfo.name}</div>
      <div>{props.userInfo.age}</div>
      <button onClick={() => props.getMsg()}>执行父组件中的函数</button>
      {props.child}
    </>
  )
}

// 类组件的son
class SonC extends React.Component {
  render() {
    return (
      <>
        <div>类子组件, {this.props.msg}</div>
        <ul>
          {this.props.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div>{this.props.userInfo.name}</div>
        <div>{this.props.userInfo.age}</div>
        <button onClick={() => this.props.getMsg()}>执行父组件中的函数</button>
        {this.props.child}
      </>
    )
  }
}

// App 父组件 Son 子组件
class App extends React.Component {
  state = {
    message: 'this is message',
    list: [1,2,3],
    userInfo: {
      name: 'yi',
      age: 27
    }
  }
  getMsg = () => {
    console.log(this.state.message)
  }
  render() {
    return (
      <>
        <div>父组件</div>
        {/* 子组件身上绑定属性 属性名可以自定义 保持语义化 */}
        <SonF
          msg={this.state.message}
          list={this.state.list}
          userInfo={this.state.userInfo}
          getMsg={this.getMsg}
          child={<span>this is span</span>}
          />
        <SonC
          msg={this.state.message}
          list={this.state.list}
          userInfo={this.state.userInfo}
          getMsg={this.getMsg}
          child={<span>this is span</span>}
          />
      </>
    )
  }
}
```

## 28、组件通信-父传子-props解构
```
import React from "react"

// 函数式的son
function SonF(props) {
  const { msg, list, userInfo, getMsg, child } = props
  return (
    <>
      <div>函数子组件, {msg}</div>
      <div>父组件的list{list.map(item => <p key={item}>{item}</p>)}</div>
      <div>{userInfo.name}</div>
      <div>{userInfo.age}</div>
      <button onClick={() => getMsg()}>执行父组件中的函数</button>
      {child}
    </>
  )
}
function SonF2({ msg, list, userInfo, getMsg, child }) {
  return (
    <>
      <div>函数子组件, {msg}</div>
      <div>父组件的list{list.map(item => <p key={item}>{item}</p>)}</div>
      <div>{userInfo.name}</div>
      <div>{userInfo.age}</div>
      <button onClick={() => getMsg()}>执行父组件中的函数</button>
      {child}
    </>
  )
}

// App 父组件 Son 子组件
class App extends React.Component {
  state = {
    message: 'this is message',
    list: [1,2,3],
    userInfo: {
      name: 'yi',
      age: 27
    }
  }
  getMsg = () => {
    console.log(this.state.message)
  }
  render() {
    return (
      <>
        <div>父组件</div>
        {/* 子组件身上绑定属性 属性名可以自定义 保持语义化 */}
        <SonF
          msg={this.state.message}
          list={this.state.list}
          userInfo={this.state.userInfo}
          getMsg={this.getMsg}
          child={<span>this is span</span>}
          />
        <SonF2
          msg={this.state.message}
          list={this.state.list}
          userInfo={this.state.userInfo}
          getMsg={this.getMsg}
          child={<span>this is span</span>}
          />
      </>
    )
  }
}
```

## 29、组件通信-子传父-基础实现
> 父组件给子组件传递回调函数，子组件调用
**实现步骤**
1. 父组件提供一个回调函数 - 用于接收数据
2. 将函数作为属性的值，传给子组件
3. 子组件通过props调用 回调函数
4. 将子组件中的数据作为参数传递给回调函数
```
import React from "react"
// Son 子组件
// 父传子 props 函数
// 子传父：子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参传入即可
function Son({getSonMsg}) {
  return (
    <>
      <div>this is son</div>
      <button onClick={() => getSonMsg('子组件的数据')}>传给父亲的数据</button>
    </>
  )
}

// App父组件
class App extends React.Component {
  // 1、准备一个函数 传给子组件
  getSonMsg = (sonMsg) => {
    console.log(sonMsg)
  }
  render() {
    return (
      <>
        <Son getSonMsg={this.getSonMsg} />
      </>
    )
  }
}
```

## 30、组件通信-子传父-子传父的本质
```
import React from "react"
// Son 子组件
// 父传子 props 函数
// 子传父：子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参传入即可
// function Son({getSonMsg}) {
//   function clickHandler() {
//     getSonMsg('这里是子组件传递的数据')
//   }
//   return (
//     <>
//       <div>this is son</div>
//       <button onClick={clickHandler}>传给父亲的数据</button>
//     </>
//   )
// }
class Son extends React.Component {
  clickHandler = () => {
    const msg = '这是子组件的数据lala'
    this.props.getSonMsg(msg)
  }
  render() {
    return (
      <>
        <div>这是子组件</div>
        <button onClick={this.clickHandler}>子传父</button>
      </>
    )
  }
}

// App父组件
class App extends React.Component {
  // 1、准备一个函数 传给子组件
  getSonMsg = (sonMsg) => {
    console.log(sonMsg)
  }
  render() {
    return (
      <>
        <Son getSonMsg={this.getSonMsg} />
      </>
    )
  }
}
```

## 31、组件通信-兄弟通信实现
> **核心思路**：通过状态提升机制，利用共同的父组件实现兄弟通信
**实现步骤**
1. 将共享状态提升到最近的公共父组件中，又公共父组件管理这个状态
   - 提供共享状态
   - 提供操作共享状态的方法
2. 要接收数据状态的子组件通过props接收数据
3. 要传递数据状态的子组件通过props接收方法，调用方法传递数据
```
import React from "react"
// 目标：B组件中的数据传给A
// 技术方案：
// 1、先把B中的数据通过子传父 传给App
// 2、再把App接收到的Son中的数据 通过父传子 传给A

function SonA({bMsg}) {
  return (
    <>
      <div>this is A</div>
      <div>{bMsg}</div>
    </>
  )
}

function SonB({getMsg}) {
  const bMsg = '这是B组件中的数据'
  function clickHandler() {
    getMsg(bMsg)
  }
  return (
    <>
      <div>this is B</div>
      <button onClick={clickHandler}>B发送数据</button>
    </>
  )
}

class App extends React.Component {
  state = {
    bMsg: ''
  }
  // 声明一个传给B组件的方法
  getMsg = (msg) => {
    this.setState({
      bMsg: msg
    })
  }
  render() {
    return (
      <>
        <SonA bMsg={this.state.bMsg} />
        <SonB getMsg={this.getMsg} />
      </>
    )
  }
}
```
## 32、组件通信-Context实现跨组件传递数据
> **场景**  
> 如果想从App组件向任意一个下层组件传递数据，目前只能通过props一层一层往下传，很繁琐。  
> Context提供了一个**无需为每层组件手动添加props，就能在组件树间进行数据和传递的方法**  

**实现步骤**
1. 创建Context对象 导出Provider和Consumer对象
```
const { Provider, Consumer } = createContext()
```
2. 使用Provider包裹根组件提供数据
```
<Provider value={this.state.message}>
  {/* 根组件 */}
</Provider>
```
3. 需要用到数据的组件使用Consumer包裹获取数据
```
<Consumer>
  {value => /* 基于 context 值进行渲染 */}
</Consumer>
```
```
import React, { createContext } from "react"
// App -> A -> B
// App数据 -> C
// 1.导入createContext方法并执行，结构提供者和消费者

const { Provider, Consumer } = createContext()

function ComA() {
  return (
    <>
      <div>this is A</div>
      <ComB />
    </>
  )
}

function ComB() {
  return (
    <>
      <div>this is B</div>
      {/* 通过Consumer使用数据 */}
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
    </>
  )
}

class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render() {
    return (
      // 2. 使用Provider包裹根组件
      <Provider value={this.state.message}>
        <ComA />
      </Provider>
    )
  }
}
```
**注意事项**
1. 上层组件和下层组件关系是相对的只要存在就可以使用 通常都会通过App作为数据提供方
2. 这里涉及到的语法都是固定的，又两处，提供的位置 value提供数据 获取的位置 {value => 使用value做什么都可以}

## 33、组件基础阶段小练习
```
import React from "react"

function ListItem({item,delItem}) {
  function clickHandler() {
    delItem(item.id)
  }
  return(
    <>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.info}</p>
      <button onClick={clickHandler}>删除</button>
    </>
  )
}

// 数据提供者 渲染ListItem组件 App-ListItem
// 先不抽离组件 完成基础渲染后再去抽离
class App extends React.Component {
  state = {
    list: [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
      { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
      { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' }
    ]
  }
  delItem = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  render() {
    return (
      <>
        {this.state.list.map(item => (
          <ListItem key={item.id} item={item} delItem={this.delItem}/>
        ))}
      </>
    )
  }
}
```

## 34、组件进阶-特殊的children属性
**children属性是什么**  
表示组件的子节点，只要组件内部有子节点，props中就有该属性  
**children可以是什么**  
1. 普通文本
2. 普通标签元素
3. 函数
4. JSX
```
import React from "react"

// 普通文本
// function ListItem({children}) {
//   return(
//     <>
//       <div>this is ListItem</div>
//       <div>{children}</div>
//     </>
//   )
// }

// 普通标签
// function ListItem({children}) {
//   return (
//     <>
//       <div>this is ListItem</div>
//       {children}
//     </>
//   )
// }

// 函数
// function ListItem({children}) {
//   children()
//   return (
//     <>
//       <div>this is ListItem</div>
//     </>
//   )
// }

// JSX
function ListItem({children}) {
  return (
    <>
      <div>this is ListItem</div>
      {children}
    </>
  )
}

// 数据提供者 渲染ListItem组件 App-ListItem
// 先不抽离组件 完成基础渲染后再去抽离
class App extends React.Component {
  render() {
    return (
      <>
        <ListItem>
          {/* this is children */}
          {/* <div>this is children</div> */}
          {/* {() => console.log('函数')} */}
          {<h1>this is children</h1>}
        </ListItem>
      </>
    )
  }
}
```

## 35、组件进阶-props类型校验基础使用
为了防止props类型错误，增加组件的健壮性  
**实现步骤**  
1. 安装属性校验包：`yarn add prop-types`
2. 导入`prop-types`包
3. 使用组件名.propTypes = {}给组件添加校验规则
```
import React from "react"
import PropTypes from 'prop-types'

function Test({list}) {
  return (
    <>
      <div>this is Test</div>
      {list.map(item => <span key={item}>{item}</span>)}
    </>
  )
}

Test.propTypes = {
  list: PropTypes.array
}
class App extends React.Component {
  render() {
    return (
      <>
        <Test list={9} />
      </>
    )
  }
}
```

## 36、组件进阶-props类型校验整体说明
**四种常见结构**  
1. 常见类型：array、bool、func、number、object、string
2. React元素类型：element
3. 必填项：isRequired
4. 特定的结构对象：shape({})
```
import React from "react"
import PropTypes from 'prop-types'

function Test() {
  return (
    <>
      <div>this is Test</div>
    </>
  )
}

Test.propTypes = {
  list: PropTypes.array.isRequired
}
class App extends React.Component {
  render() {
    return (
      <>
        <Test />
      </>
    )
  }
}
```

## 37、组件进阶-函数组件props默认值
通过`defaultProps`可以给组件的props设置默认值，在未传入props的时候生效  
```
import React from "react"
import PropTypes from 'prop-types'
// 函数组件默认值 1. 使用defaultProps 2. 函数参数默认值（推荐方案）
// 区别：第一种在使用的时候组件内部已经有了pageSize这个prop 第二种只有传递的时候组件内部才有这个prop

function Test(props) {
  return (
    <>
      <div>this is Test</div>
      {props.pageSize}
    </>
  )
}
// function Test({pageSize = 10}) {
//   return (
//     <>
//       <div>this is Test</div>
//       {pageSize}
//     </>
//   )
// }

Test.propTypes = {
  list: PropTypes.array.isRequired
}

// Test.defaultProps = {
//   pageSize: 10
// }
class App extends React.Component {
  render() {
    return (
      <>
        <Test pageSize={20} />
      </>
    )
  }
}
```

## 38、组件进阶-类组件props默认值
```
import React from "react"

class Test extends React.Component {
  static defaultProps = {
    pageSize: 10
  }
  render() {
    return (
      <>
        <div>this is Test</div>
        {this.props.pageSize}
      </>
    )
  }
}

// Test.defaultProps = {
//   pageSize: 10
// }

class App extends React.Component {
  render() {
    return (
      <>
        <Test pageSize={20} />
      </>
    )
  }
}
```

## 39、组件声明周期-整体概览
> 组件的生命周期是指组件从被创建到挂载到页面中运行起来，再到组件不用时卸载的过程，注意，只有类组件才有生命周期（类组件 实例化 函数组件 不需要实例化）  

[https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## 40、组件生命周期-挂载阶段
![](https://cdn.nlark.com/yuque/0/2022/png/274425/1654490729034-d2d80cce-7fab-4dd8-bcbc-29e33bdffb63.png)  
|钩子函数|触发时机|作用|
|----|----|----|
|constructor|创建组件时，最先执行，初始化的时候只执行一次|1.初始化state 2.创建ref 3.使用bind解决this指向问题等|
|render|每次组件渲染都会触发|渲染UI（**注意：不能在里面调用setState**）|
|componentDidMount|组件挂载（完成DOM渲染）后执行，初始化的时候执行一次|1.发送网络请求 2.DOM操作|
||||
```
import React from "react"

class App extends React.Component {
  constructor() {
    super()
    console.log('constructor')
  }
  state = {
    count: 0
  }
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  componentDidMount() {
    console.log('componentDidMount')
    // 类似于mounted
  }
  render() {
    console.log('render')
    return (
      <>
        <div>this is App</div>
        <div>{this.state.count}</div>
        <button onClick={this.clickHandler}>点我加一</button>
      </>
    )
  }
}
```

## 41、组件生命周期-更新和卸载时
### 更新阶段
![](https://cdn.nlark.com/yuque/0/2022/png/274425/1654490742583-b933202d-3de7-41ae-b9ba-75ae1d2af34c.png)  
|钩子函数|触发时机|作用|
|----|----|----|
|render|每次组件渲染都会触发|渲染UI（与挂载阶段是同一个render）|
|componentDidUpdate|组件更新后（DOM渲染完毕）|DOM操作，可以获取到更新后的DOM内容，**不要直接调用setState**|
||||

### 卸载阶段
|钩子函数|触发时机|作用|
|----|----|----|
|componentWillUnmount|组件卸载（从页面中消失）|执行清理工作（比如：清理定时器）|

```
import React from "react"

class Test extends React.Component{
  // 如果数据是组件的状态需要去影响视图 定义到state中
  // 而如果我们需要的数据状态 不和视图绑定 定义成一个普通的实例属性就可以了
  // state中尽量保持精简
  timer = null
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log(1)
    }, 1000);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    // 清理定时器
    clearInterval(this.timer)
  }
  render(){
    return (
      <>
        <div>Test</div>
      </>
    )
  }
}

class App extends React.Component {
  constructor() {
    super()
    console.log('constructor')
  }
  state = {
    count: 0,
    flag: true
  }
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
      flag: !this.state.flag
    })
  }
  componentDidMount() {
    console.log('componentDidMount')
    // 类似于mounted
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  render() {
    console.log('render')
    return (
      <>
        <div>this is App</div>
        <div>{this.state.count}</div>
        <button onClick={this.clickHandler}>点我加一</button>
        {this.state.flag ? <Test></Test> : null}
      </>
    )
  }
}
```

## 42、阶段性重点内容总结
- Context机制
  - 场景： 跨组件通信 顶层向任意底层传递数据
  - 实现
    - 1.调用createContext方法 得到Provider和Consumer
    - 2.通过Provider包裹顶层组件 value属性绑定数据
    - 3.通过Consumer包裹底层组件{value => 消费数据}
- 组件children属性
  - 概念：组件内部写的内容都会识别人children属性存入props
  - 支持：文本、标签、JSX、函数
  - 应用场景：render Props和高阶函数
- props校验
  - 场景：在用户传入数据时提供类型校验（常见于组件库）
  - 如何实现：通过prop-types官方工具包 组件名.propTypes = {定义规则}
- props默认值
  - 场景：如果想传入就以传入的参数为主，如果不传就使用默认值
  - 函数组件 - 通过函数默认参实现 function List({pageSize = 10}){}
  - 类组件 static defaultProps = {pageSize = 10}
- 生命周期
  - 挂载阶段（按顺序执行一次）
    - constructor
    - render（渲染）
    - componentDidMount ajax/dom
  - 更新阶段（只要组件更新就会执行）
    - render
    - componentDidUpdate
  - 卸载阶段（组件被销毁时执行一次）
    - componentDidUnmount 清除操作
  - 注意事项：不可以在render/componentDidUpdate中执行setState

## 43、hook-产生背景和优势
### 1.**什么时hooks**
> hooks的本质：**一套能够使函数组件更强大，更灵活的钩子**  
React体系里组件分为类组件和函数组件  
函数组件时一个更加匹配React的设计理念`UI = f(data)`，而之前的函数组件是不可以有自己的状态的，为了能让函数组件可以拥有自己的状态，所以从react v16.8开始，hooks出现。  
**注意点**
1. 有了hooks之后，为了兼容老版本，class类组件并没有被移除，两者都可以使用
2. 有了hooks之后，不能再把函数称为无状态组件了，因为hooks为函数组件提供了状态
3. hooks只能再函数组件中使用

### 2.Hooks解决了什么问题
Hooks的出现解决了两个问题
1. 组件的逻辑复用
  - 在hooks出现之前，react先后尝试了mixins混入，HOC高阶组件，render-props等模式，但是都有各自的问题，比如mixin的数据来源不清晰，高阶组件的嵌套问题等
2. class组件自身的问题
  - class组件大而全，提供了很多东西，有不可忽视的学习成本，比如各种生命周期，this指向问题等

### 3.Hooks优势总结
1. 告别难以理解的class
2. 解决业务逻辑难以拆分的问题
3. 使状态逻辑复用变得简单可行
4. 函数组件在设计思想上，更加契合React的理念

## 44、hook-useState-基础使用
1. 导入useState函数 react
2. 执行这个函数并且传入初始值 必须在函数组件中
3. [数据，修改数据的方法]
4. 使用数据 修改数据
```
// useState
// 1. 导入useState函数 react
// 2. 执行这个函数并且传入初始值 必须在函数组件中
// 3. [数据，修改数据的方法]
// 4. 使用数据 修改数据

import {useState} from 'react'

function App() {
  const [la,setLa] = useState(0)
  return (
    <>
      <button onClick={() => setLa(la + 1)}>{la}</button>
    </>
  )
}
```

## 45、hook-useState-数据的读取和修改
```
// useState
// 快速使用
// 1. 导入useState函数 react
// 2. 执行这个函数并且传入初始值 必须在函数组件中
// 3. [数据，修改数据的方法]
// 4. 使用数据 修改数据

// 状态的读取和修改
// const [count,setCount] = useState(0)
// 1. useState传过来的参数 作为count的初始值
// 2. [count, setCount] 这里的写法是一个解构赋值 useState返回值是一个数组
//    名字可以自定义嘛？ -> 可以自定义保持语义化
//    顺序可以换吗？ -> 不可以的 第一个参数就是数据状态 第二个参数就是修改数据的方法
// 3. setCount函数 作用用来修改count 依旧保持不能修改原值还是生成一个新值替换原值
//    setCount（基于原值计算得到的新值）
// 4. count和setCount是一对 是绑定在一起的 setCount只能用来修改对应的count值

import {useState} from 'react'

function App() {
  const [count,setCount] = useState(0)
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  )
}
```

## 46、hook-useState-组件的更新过程
组件的更新  
当调用setCount的时候更新过程  
首次渲染  
首次被渲染的时候 组件内部的代码会被执行一次  
其中useState也会耕者执行 重点注意 初始值只在首次渲染生效  

更新渲染 setCount都会更新  
1. app组件会再次渲染 这个函数会再次执行  
2. useState再次执行 得到的新的count值不是0 而是修改之后的1 模板会用新值渲染  
重点一句话：useState初始值只在首次渲染生效后续只要调用setCount整个app中代码都会执行，此时的count每次拿到的都是最新值

## 47、hook-useState-使用规则说明
1. `useState`函数可以执行多次，每次执行相互独立，每调用一次为函数组件提供一个状态
```
import {useState} from 'react'

function App() {
  const [count,setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  const [list, setList] = useState([])
  function test() {
    setCount(count + 1)
    setFlag(false)
    setList([1,2,3])
  }
  return (
    <>
      <div>count:{count}</div>
      <div>flag:{flag}</div>
      <ul>
        <li>list</li>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
      <button onClick={test}>change</button>
    </>
  )
}
```
2. 只能出现在函数组件中
3. 不能嵌套在if/for/其他函数中(react按照hooks的调用顺序识别每一个hook)
4. 可以通过开发者工具查看hook状态

## 48、hook-useEffect-理解副作用和具体使用
> **什么是副作用？**  
> 副作用是相对于主作用来说的，一个函数除了主作用，其他的作用就是副作用。对于React组件来说，**主作用是根据数据（state/props）渲染UI，**，除此之外都是副作用（比如，手动修改DOM）  

**常见的副作用**  
1. 数据请求ajax发送
2. 手动修改dom
3. localstorage操作  
useEffect函数的作用就是为react函数组件提供副作用处理的。  

**使用步骤**
1. 导入`useEffect`函数
2. 调用`useEffect`函数，并传入回调函数
3. 在回调函数中编写副作用（dom操作）
4. 修改数据状态
5. 检测副作用是否生效
```

import {useState, useEffect} from 'react'
// 在修改数据之后 把count值放到页面标题中
// 1. 导入useEffect函数
// 2. 在函数组件中执行 传入回调 并且定义副作用
// 3. 当通过修改状态更新组件时，副作用也会不断执行

function App() {
  const [count,setCount] = useState(0)
  useEffect(() => {
    document.title = count
  })
  return (
    <>
      <div>count:{count}</div>
      <button onClick={() => setCount(count + 1)}>change</button>
    </>
  )
}
```

## 49、hook-useEffect-通过依赖项控制执行时机
**依赖项控制副作用的执行时机**

1. 默认状态（无依赖项）
   - 组件初始化的时候先执行一次 等到每次数据修改组件更新再次执行
2. 添加一个空数组依赖项
   - 组件初始化的时候执行一次
3. 依赖特定项
   - 组件初始化的时候执行一次 依赖的特定项发生变化后会再次执行
4. 注意事项
   - 只要在useEffect回调函数中用到的数据状态就应该出现在依赖项数组中声明 否则可能会有bug

```

import {useState, useEffect} from 'react'
// 在修改数据之后 把count值放到页面标题中
// 1. 导入useEffect函数
// 2. 在函数组件中执行 传入回调 并且定义副作用
// 3. 当通过修改状态更新组件时，副作用也会不断执行

function App() {
  const [count,setCount] = useState(0)
  const [name, setName] = useState('yi')
  useEffect(() => {
    console.log('我执行了')
    document.title = count
  }, [count])
  return (
    <>
      <div>count:{count}</div>
      <button onClick={() => setCount(count + 1)}>change</button>
      <button onClick={() => setName('q')}>{name}</button>
    </>
  )
}
```

## 50、hook阶段小练习-useWindowScroll
新建hook文件夹，新建useWindowScroll.js文件
```
import {useState} from 'react'

export function useWindowScroll() {
  const [y, setY] = useState(0)
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollTop
    setY(h)
  })
  return [y]
}
```
app.js导入
```
import {useState} from 'react'

export function useWindowScroll() {
  const [y, setY] = useState(0)
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollTop
    setY(h)
  })
  return [y]
}
```

## 50、hook阶段小练习-useLocalStorage
新建useLocalStorage文件
```
import { useEffect, useState } from "react";

export function useLocalStorage(key, defaultValue) {
  const [message, setMessage] = useState(defaultValue);
  useEffect(() => {
    window.localStorage.setItem(key, message);
  }, [message, key]);
  return [message, setMessage];
}
```
app.js导入
```

import {useLocalStorage} from './hook/useLocalStorage'

function App() {
  const [message, setMessage] = useLocalStorage('hook-key', 'yi')
  setTimeout(() => {
    setMessage('qi')
  }, 5000);
  return (
    <>
      <div>{message}</div>
    </>
  )
}

export default App
```

## 51、hook-useState-函数作为参数
**使用场景**  
参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始state需要通过计算才能获得，则可以传入一个函数，在函数中计算并返回初始的state，此函数只在初始渲染时被调用。
```
import { useState } from "react";

function getDefaultValue() {
  for(let i = 0; i < 10000; i++) {

  }
  return 10
}

function Counter(props) {
  const [count, setCount] = useState(() => {
    // 这里目的为了体现初始值通过一定的计算
    // 这个计算比较广义的概念
    // 只要无法直接确定 需要通过一定的操作才能获取 就可以理解为计算
    return getDefaultValue()
  })
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  )
}

function App() {
  return (
    <>
      <Counter count={10}/>
      <Counter count={20}/>
    </>
  )
}

```