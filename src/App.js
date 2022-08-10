import { useEffect, useState } from "react"

function Test() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('定时器执行了')
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <>
      <div>this is test</div>
    </>
  )
}

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <>
      {flag ? <Test /> : null}
      <button onClick={() => setFlag(!flag)}>点击切换</button>
    </>
  )
}

export default App
