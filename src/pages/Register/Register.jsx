// import React, {useState} from 'react'
// import "./Register.css"
import styles from "./Register.module.css"
import styled from "styled-components"
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from "../../config/firebase"; // Import the app instance
import { showSuccessToast, showErrorToast, showInfoToast} from '../../util/toast.js'
import useForm from "../../hooks/useForm"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => (props.color) || "#BF4F74" };
  &:hover{ color: green};
  `

const Register = () => {

  const [userData, handleChange] = useForm({
    userName: "",
    email: "",
    password:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inside handle submit");

    const {userName, email, password} = userData;
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log("user created:", userCredential.user)
        return sendEmailVerification(user)
      })
      .then((result) => {
        //user created
        showSuccessToast("User created....Please verify your email to login");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log("error creating user:", errorCode);
        showErrorToast(errorCode);
      })
  }


  // const handleUserNameChange = (e) => {
  //   console.log("inside username change");
  //   setUserData({...userData, userName: e.target.value})
  // }

  // const handleEmailChange = (e) => {
  //   console.log("inside email change");
  //   setUserData({...userData, email: e.target.value})
  // }

  // const handlePasswordChange = (e) => {
  //   console.log("inside password change");
  //   setUserData({...userData, password: e.target.value})
  // }


  return (
    <>
    <div className={styles.registerContainer}>
      
      <div className={styles.headingBox}>
        <h2> Register </h2>
      </div>

      <Title> Styled Component </Title>
      <Title color="red"> Styled Component </Title>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <label htmlFor="userName" className={styles.label}> Username </label>
          <input  type="text" id="userName" onChange={handleChange}/>
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="email" className={styles.label}> Email </label>
          <input  type="text" id="email"  onChange={handleChange}/>
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="password" className={styles.label}> Password </label>
          <input  type="password" id="password"  onChange={handleChange}/>
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