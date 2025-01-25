import React from 'react'
// import "./Register.css"
import styles from "./Register.module.css"

const Register = () => {
  return (
    <>
    <div className={styles.registerContainer}>
      
      <div className={styles.heading}>
        <h2> Register </h2>
      </div>

      <div>
        <label for="usernameInput" className={styles.label}> Username </label>
        <input  type="text" id="usernameInput"/>
      </div>

      <div>
        <label for="emailInput" className={styles.label}> Email </label>
        <input  type="text" id="emailInput" />
      </div>

      <div>
        <label for="passwordInput" className={styles.label}> Password </label>
        <input  type="password" id="passwordInput" />
      </div>

      <div>
        <button> Register </button>
      </div>

    </div>
  </>
  )
}

export default Register