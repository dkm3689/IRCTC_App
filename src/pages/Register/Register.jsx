import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <>
    <div className="register">
      
      <div className="heading">
        <h2> Register </h2>
      </div>

      <div>
        <label className="username"> Username </label>
        <input  type="text" />
      </div>

      <div>
        <label for="emailInput" className="email"> Email </label>
        <input  type="text" id="emailInput" />
      </div>

      <div>
        <label className="password"> Password </label>
        <input  type="password" />
      </div>

      <div>
        <button> Register </button>
      </div>

    </div>
  </>
  )
}

export default Register