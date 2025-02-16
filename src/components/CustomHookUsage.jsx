import React from 'react'
import useLocalStorage from "../hooks/useLocalStorage"

const CustomHookUsage = () => {

  const [getValue, setValue] = useLocalStorage();  
  setValue('sampleKey', 10);
  console.log(getValue('sampleKey'));

  return (
    <div>CustomHookUsage</div>
  )
}

export default CustomHookUsage