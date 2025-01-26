import React from 'react'
// import "./Register.css"
import styles from "./Register.module.css"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => (props.color) || "#BF4F74" };
  &:hover{ color: green};
  `

const Register = () => {
  return (
    <>
    <div className={styles.registerContainer}>
      
      <div className={styles.headingBox}>
        <h2> Register </h2>
      </div>

      <Title> Styled Component </Title>
      <Title color="red"> Styled Component </Title>

      <form>
        <div className={styles.inputBox}>
          <label for="usernameInput" className={styles.label}> Username </label>
          <input  type="text" id="usernameInput"/>
        </div>

        <div className={styles.inputBox}>
          <label for="emailInput" className={styles.label}> Email </label>
          <input  type="text" id="emailInput" />
        </div>

        <div className={styles.inputBox}>
          <label for="passwordInput" className={styles.label}> Password </label>
          <input  type="password" id="passwordInput" />
        </div>

        <div className={styles.buttonBox}>
          <button> Register </button>
        </div>

      </form>

    </div>
  </>
  )
}

export default Register