import React, { useEffect, useState,useEffectEvent } from 'react'

const UseEffectEvent = () => {
    const [count,setCount] = useState(0);
    const effectEvent = useEffectEvent(()=>{
         console.log("count",count);
    })
    useEffect(()=>{
        let interval = setInterval(()=>{
            effectEvent() 
        },1000);
        console.log(interval);
        return ()=>clearInterval(interval)
        
    },[])
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>add</button>
    </div>
  )
}

export default UseEffectEvent