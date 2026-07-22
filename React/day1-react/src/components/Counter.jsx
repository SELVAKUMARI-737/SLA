import React, {useState} from 'react'


const Counter = () => {
    const [count , setCount] = useState(0);
    const handleClick =() =>{
      setCount(count +1);
    };
    let message;
    if(count === 0){
      message= "please Wait"

    }
    else if(count %2 === 0){
      message = " patient go to room 2 "
    }
    else{
      message = " patient go to room 1"
    }
  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={handleClick}>
        Next Patient
      </button>
       <h3>{message}</h3>
    </div>
  )
}

export default Counter