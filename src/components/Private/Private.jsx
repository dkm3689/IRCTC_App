import React, { useContext, useEffect } from "react";
import { getAuth } from "firebase/auth";
import app from "../../configs/firebase.js";
import {AuthContext} from "../../context/AuthContext.jsx";
import { showErrorToast } from "../../utils/toast.js";
import {Navigate} from "react-router-dom";

function Private({ children }) {
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    console.log("logged in user details at private component", loggedInUser);
    if (!loggedInUser) {
      showErrorToast("You are not authenticated, PLease login to continue!");
    }
  }, [loggedInUser]);

  return loggedInUser ? children : <Navigate to="/login" replace />;
}

export default Private;