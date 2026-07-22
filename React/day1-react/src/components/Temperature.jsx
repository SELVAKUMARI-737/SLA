import React, {useState} from 'react'

const Temperature = () => {
    const [temp , setTemp] = useState(null);
    const tempCheck = () =>{
        let tempvalue =Number(prompt("Enter your temperature"));
        setTemp(tempvalue);     
    }
    let message = "";
    if(temp === null){
        message = "click button to enter your temperature"
    }
    else if (temp >40 ){
        message = "High Fever"
    }
    else if ( temp >=30 && temp <=40){
        message = "Normal"
    }
    else {
        message = "low temperature"
    }

  return (
    <div>
        <h2>Temperature check</h2>
        <button onClick={tempCheck}>
            Enter Temperature
        </button>
        <h3>{message}</h3>
    </div>
  )
}

export default Temperature