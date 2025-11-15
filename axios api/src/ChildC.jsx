import React, { useContext } from 'react'
import { fName,lName } from './App'
 
const ChildC = () => {
const fname = useContext(fName);
const lname = useContext(lName);

  return (
    <div>
        <h1>My First Name is {fname} and Last Name is {lname}</h1>
        
    </div>
  )
}

export default ChildC