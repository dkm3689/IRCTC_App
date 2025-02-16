import React from 'react'

const useLocalStorage = () => {

  function setValue(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
    console.log("setValue is running")
  }

  function getValue(key) {
    console.log("getValue is running")
    return localStorage.getItem(key)
   
  }

  return [getValue, setValue];

  return (
    <div>useLocalStorage</div>
  )
}

export default useLocalStorage