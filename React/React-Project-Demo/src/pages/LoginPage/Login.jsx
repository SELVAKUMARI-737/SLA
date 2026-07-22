import { useState } from 'react'
import React  from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  let navigate= useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      let res = await fetch('https://jsonplaceholder.typicode.com/posts',{email,password})
      console.log(res)
      if(res.status ===200){
        alert('login success',+ email)
        navigate('/profile')

      }
      else{
        alert('login failed')
      }
    } catch(err){
      console.log(err.message)
    }

  } 
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input type="email" placeholder="Enter Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter Password" required  value ={password} onChange ={(e) => setPassword(e.target.value)}/>

        <button type="submit">Login</button>

        <p className="extra">
          Don’t have an account? <span>Sign Up</span>
        </p>
      </form>
    </div>
  )
}

export default Login