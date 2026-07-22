import React,{useEffect,useState} from 'react'

const Profilepage = () => {
    const [user, setUser] = useState(null);
    
    useEffect (() =>{
        const fetchUser = async ()=> {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
            let data = await res.json()
            console.log(data)
            console.log("user",user)
            
            setUser(data)

        }
        fetchUser()
    },[])   

  return (
    <div>
        <h1>Profile page</h1>
       
              {user ? (
        <>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>City :</b> {user.address.city}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Profilepage