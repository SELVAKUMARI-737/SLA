import React,{useEffect, useState} from 'react'

const Profile = () => {
    const [name, setName] = useState("selva")
    const[msg,setMsg] = useState('Hello')
    // case 1 
    useEffect(() =>{
        console.log("side effect work every render")
    }

    )
    // case 2 
    useEffect( () =>{
        console.log("sideeffect work initial render only")
    },[])
    // empty dependency array 

    // case 3 
    useEffect(() =>{
        console.log("side effect work initial render and state change ")
    },[name])

  return (
    <div>
        {name}
        <br />
                <button onClick={() => setName("selvakumari")}>Name Change</button>
                <br />
        {msg}
        <br />

        <button onClick = {() => setMsg("welcome Back")}>msg Change</button>
    </div>
  )
}

export default Profile