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
   - 在元素身上绑定一个style属性即可,需要使用驼峰fontSize。
2. 类名样式
   - 在元素身上绑定一个className属性即可
#### 1、行内样式
在元素身上绑定一个style属性即可,需要使用驼峰fontSize。
```
function App() {
  return(
    <div className="App">
      <span style={{ color: 'red', fontSize: '30px' }}>this is span</span>
    </div>
  )
}
```
style使用两个{{}}是因为外层的就是react的表达式所要使用的{},内层的{}表明是个对象。如果样式复杂可以将内部对象提取出来一个变量，直接引用变量。
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
在元素身上绑定一个className属性即可。

新建app.css
```
.active {
  color: blue;
}
```
app.js中引用此样式，在模板中使用className即可，注意是className不是class
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
1. JSX必须有一个根节点，如果没有根节点，可以使用<></>(幽灵节点)替代
2. 所有标签必须形成闭合，成对闭合或者自闭合都可以
3. JSX中的语法更加贴近JS语法，属性名采用驼峰命名法 class -> className for -> htmlFor
4. JSX支持多行(换行)，如果需要换行，需使用()包裹，防止bug出现。

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