import React,{useState} from 'react'

const Age = () => {
    const [age , setAge] = useState(null);
    const checkAge = () =>{
        let agecategory = Number(prompt("Enter your age"));
        setAge(agecategory);
    }
    let message = "";
    if(age === 0){
        message = "click the button Enter your age"
    }
    else if(age<13){
        message = "Child"
    }
    else if ( age>=13 && age<=19 ){
        message = "Teenager"
    }
    else{
        message ="Adult"
    }
  return (
    <div>
        <h2>Find your Age category</h2>
        <button onClick={checkAge}>Enter your age</button>
        <h3>{message}</h3>
    </div>
  )
}

export default Age