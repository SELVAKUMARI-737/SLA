import React from 'react'
import Child from './Child'

const BoxModel = ({number, arr}) => {
  return (
    <div>
        <h1> the number is {number}</h1>
        <h2>{arr}</h2>
        <Child arr1 = {arr}/>
    </div>
  )
}

export default BoxModel