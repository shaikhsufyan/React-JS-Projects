import React, { useState } from 'react'

const State = () => {
    const [data,setData] = useState("")
    const handleInput = (e)=>{
        setData(e.target.value);
         
    }
    console.log(data);
    
  return (
    <div>
        <h1>Why useState() Hook Not Update Immediately</h1>
        <input type='text' placeholder='TYPE SOMETHING...' onChange={handleInput}/> 
    </div>
  )
}

export default State