import {useNavigate} from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  // 跳转到关于页

  function goAbout() {
    navigate('/about', {replace: true})
  }
  return (
    <div>
      Login
      <button onClick={goAbout}>跳转关于</button>
    </div>
  )
}

export default Login