import React ,{useState} from 'react'

const Greeting = () => {
    const hour = new Date().getHours();
    let greeting ="";
    const [age,setAge] = useState("");
    const [gender, setGender] = useState("");
    const [message, setMessage] = useState("");

    if (hour >=5 && hour<12) {
        greeting = "Good morning";
    }
    else if (hour >=12 && hour <17){
        greeting = " Good Afternoon";
    }
    else if(hour >= 17 && hour <21){
        greeting = "Good Evening"
    }
    else{
        greeting = "Good NIght"
    }
    const handleUser=() =>{
    if (age !== "" && age <18){
       setMessage ("Hello young User")
    }
    else if (age >=18 && gender == "Male"){
        setMessage ("welcome sir")

    }
    else if (age>=18 && gender == "Female"){
        setMessage ("welcome Mam")
    }

    }

  return (
    <div>
        <h2>Greeting App</h2>
        <h3>{greeting},{message}</h3>
        <input type="number" placeholder='Enter your age' value={age} onChange={(e)=> setAge(e.target.value)} />
        <select name="" id="" value={gender} onChange={(e)=> setGender(e.target.value)}>
            <option value="Male">Male</option>
             <option value="Female">Female</option>
             
        </select>
        <button onClick = {handleUser}>Submit</button>

    </div>
  )
}

export default Greeting