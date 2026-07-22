import React, {useEffect, useState} from 'react'

const CounterApp = () => {
    const[count , setCount] = useState(0)
    useEffect(()=>{
      console.log("count changed ")
    },[count])

  return (
    <div>CounterApp
        <br />
        <button onClick={() =>setCount(count+1)}>+</button>
        <br />
        {count}
        <br />
        <button onClick = {() => setCount(count - 1)} >-</button>
        <br />
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default CounterApp