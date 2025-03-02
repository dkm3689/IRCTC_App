import React, {createContext, useState, useEffect} from 'react'


const AuthContext = createContext();

const AuthProvider = ({children}) => {
  
  const [loggedInUser, setLoggedInUser] = useState({});

  
  const login = (user) => {
    setLoggedInUser(user);
    console.log("user reeived at auth context", user);
    console.log("logged in user", loggedInUser);
  }


  useEffect(() => {
    console.log("Updated loggedInUser:", loggedInUser);
  }, [loggedInUser]);

  const logout = () => {
    setLoggedInUser(null);
  }



  return (
   <AuthContext.Provider value={ {loggedInUser ,login, logout} }> 
    {children}
   </AuthContext.Provider>
  )
}

export {AuthProvider, AuthContext};