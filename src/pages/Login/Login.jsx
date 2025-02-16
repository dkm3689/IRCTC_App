import React, {useState} from 'react'
import "./Login.css"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { showSuccessToast, showErrorToast, showInfoToast} from '../../util/toast.js'

const Login = () => {

  const [userCred, setUserCred] = useState({
    email: "",
    password: ""
  })

  const handleEmailChange = (e) => {
    console.log("inside email change");
    setUserCred({...userCred, email: e.target.value})
  }


  const handlePasswordChange = (e) => {
    console.log("inside password change");
    setUserCred({...userCred, password: e.target.value})
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const {email, password} = userCred;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        showSuccessToast("Logged in successfully");
        console.log("Successfully logged in");
      }) .catch((error) => {
          showErrorToast(error.code);
          console.log("error signing in:", error);
      })
  }



  return (
    <>
    <div className="login">
      
      <div className="heading">
        <h2> Login </h2>
      </div>

      <form onClick={handleSubmit}>
     
          <div>
            <label htmlFor="email"  className="username"> Username/Email </label>
            <input  type="text" id="email" onChange={handleEmailChange} />
          </div>

          <div>
            <label htmlFor="password" className="password"> Password </label>
            <input  type="password"  id="password" onChange={handlePasswordChange} />
          </div>

          <div>
            <button> Login </button>
          </div>
        </form>

    </div>
  </>
  )
}

export default Login