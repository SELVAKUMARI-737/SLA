import React, {useState } from 'react'
const ExampleState = () => {
    let [age, setAge] = useState(30)
    let [msg, setMsg] = useState('normal msg')

    const handleClick = () =>{
        // console.log(event)
        setAge(45)
        setMsg('msg updated') 

    }
  return (
    <div>ExampleState
        <button onClick = {handleClick}> Age Update</button>
        <p> age : {age}</p>
        <p>msg : {msg}</p>
    </div>
  )
}

export default ExampleState 