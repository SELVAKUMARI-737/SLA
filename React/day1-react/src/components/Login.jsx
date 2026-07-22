import React from 'react'

const Login = () => {
    let isLogin = true;
  return (

    
    <div>
        <h1>Login page</h1>
        <button>{isLogin ? <h1>logout</h1> : <h1>login</h1> }</button>    
    </div>
  )
}

export default Login