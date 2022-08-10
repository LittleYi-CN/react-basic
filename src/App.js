import { useEffect } from "react"

function App() {
  useEffect(() => {
    function loadData() {
      fetch('http://geek.itheima.net/v1_0/channels').then(res => res.json()).then(data => console.log(data))
    }
    loadData()
  }, [])
  return (
    <></>
  )
}

export default App
