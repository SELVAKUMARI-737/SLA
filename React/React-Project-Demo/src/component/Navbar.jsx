import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <Link to='/Home' style={{color: 'blue'}}>Home</Link>
                <br />
                <Link to='/login' style={{color: 'blue'}}>Login</Link>
                <br />
                {/* <Link to='/profile' style={{color: 'blue'}}>Profile</Link> */}
                <br />
                <Link to='/profile1' style={{color: 'blue'}}>Profile1</Link>
                <br />
                <Link to='/Counter' style={{color: 'blue'}}>CounterApp</Link>
                

                
            </div>

        </div>
    )
}

export default Navbar