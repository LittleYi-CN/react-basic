
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
