import React, { useState, useTransition } from 'react'

const Transition = () => {
     const [pending,startTransiton] = useTransition();
 
    const handleClick = () =>{
         startTransiton(async ()=>{
            await new Promise((res)=>setTimeout(res,3000));
         })
    }
  return (
    <div>
    <h1>useTransition Hook in React 19</h1>
        <button onClick={handleClick} disabled={pending}>Submit</button>
        {pending && <div>Submitting</div>}
    </div>
  )
}

export default Transition