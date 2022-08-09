
import {useWindowScroll} from './hook/useWindowScroll'

function App() {
  const [y] = useWindowScroll()
  return (
    <>
      <div style={{height: '12000px'}}>{y}</div>
    </>
  )
}

export default App
