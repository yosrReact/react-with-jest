import { useState } from "react"
function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const handleClick = () => {
    setMessage("success")
  }
  return (
    <div>
      Email
      <input
        type="email"
        name="email"
        value={email}
        data-testid="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      Password
      <input
        type="password"
        name="password"
        value={password}
        data-testid="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} data-testid="connect">
        Se connecter
      </button>
      {message.length !== 0 && message}
    </div>
  )
}


export default Login
