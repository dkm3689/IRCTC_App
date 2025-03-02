import React, { useState, useContext } from "react";
import styles from "./Login.module.css";
import {useNavigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  showSuccessToast,
  showErrorToast,
  showInfoToast,
} from "../../utils/toast.js";
import useForm from "../../hooks/useForm";
import {AuthContext} from "../../context/AuthContext"
import Navbar from "../../components/Navbar/Navbar.jsx"

const Login = () => {

  const {login} = useContext(AuthContext);
  console.log("login function", login);

  const navigate = useNavigate();

  const [userData, handleChange] = useForm({
    email: "",
    password: "",
  });

  // const handleEmailChange = (e) => {
  //   console.log("inside email change");
  //   setUserCred({...userCred, email: e.target.value})
  // }

  // const handlePasswordChange = (e) => {
  //   console.log("inside password change");
  //   setUserCred({...userCred, password: e.target.value})
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userData;
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user.emailVerified) {
          showSuccessToast("Logged in successfully");
          console.log("Successfully logged in");
          console.log("user credential and data", userCredential.user);
          login(userCredential.user);
          navigate("/");
        } else {
          showInfoToast("please verify email before logging in");
        }
      })
      .catch((error) => {
        showErrorToast(error.code);
        console.log("error signing in:", error);
      });
  };

  return (
    <>
       <Navbar/>
      <div className={styles.loginContainer}>
        <div className={styles.headingBox}>
          <h2> Login </h2>
        </div>

        <form onClick={handleSubmit}>
          <div className={styles.inputBox}>
            <label htmlFor="email" className="username">
              {" "}
              Username/Email{" "}
            </label>
            <input type="email" id="email" onChange={handleChange} />
          </div>

          <div className={styles.inputBox}>
            <label htmlFor="password" className="password">
              {" "}
              Password{" "}
            </label>
            <input type="password" id="password" onChange={handleChange} />
          </div>

          <div className={styles.buttonBox}>
            <button> Login </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;