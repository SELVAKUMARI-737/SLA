import React, { useState, useEffect } from 'react'
import CounterApp from './CounterApp'

const Assignment5 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [show, setShow] = useState(true)

  useEffect(() => {
    alert("The page is loaded")
  }, [])

  useEffect(() => {
    console.log(isLoggedIn ? "You are logged in - Dashboard" : "You are not logged in")
  }, [isLoggedIn])

  return (
    <div>
      <h2>React Task</h2>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {isLoggedIn && <h3>Welcome to Dashboard</h3>}

      <hr />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Content" : "Show Content"}
      </button>

      {show && <CounterApp />}
    </div>
  )
}

export default Assignment5