import React from 'react'
import "./Login.css"

const Register = () => {
  return (
    <>
    <div className="login">
      
      <div className="heading">
        <h2> Login </h2>
      </div>

      <div>
        <label className="username"> Username </label>
        <input  type="text" />
      </div>


      <div>
        <label className="password"> Password </label>
        <input  type="password" />
      </div>

      <div>
        <button> Login </button>
      </div>

    </div>
  </>
  )
}

export default Register