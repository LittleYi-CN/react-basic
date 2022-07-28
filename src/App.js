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

export default App;
