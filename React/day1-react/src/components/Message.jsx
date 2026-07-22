import React, {useState} from 'react'

const Message = () => {
    const[msg,setMsg] = useState('Hi')
  return (
    <div><h3>Message Box</h3>
    <br />
    {msg}
    <br />
    <button style={{color: 'white', backgroundColor: 'pink'} } onClick={()=>setMsg('Welcome to Msg App')}>Click here</button>
    
    </div>
  )
}

export default Message