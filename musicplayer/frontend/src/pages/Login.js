import React, { useContext } from 'react'
import { Link} from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

const Login = () => {
  const {loginUser,loginMessage} = useContext(AuthContext)

  
  return (
    <div>
      {loginMessage && <p>{loginMessage}</p>}
      <center>
      <form className="form" onSubmit={loginUser}>
        <input type="email" placeholder='email' name="email" required/>
        <br/>
        <input type="password" placeholder='Password' name="password" required/>
        <br/>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? Register <Link to="/register">here</Link></p>
      </center>
    </div>
  )
}

export default Login
