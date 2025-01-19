import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
        {/* <div>Navbar</div> */}
        
        <div className="navbar">
            {/* <div className="logo"> */}
                <div className="logo"> IRCTC </div>
            {/* </div> */}

            <div className="navlinks">
                <span> Home </span>
                <span> Login </span>
                <span> Register </span>
            </div>
            
        </div>
    </>
  )
}

export default Navbar