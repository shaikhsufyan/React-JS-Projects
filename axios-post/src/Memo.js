import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [add,setAdd] = useState(0)
    const [state, setState] = useState(false)

    const delay = (add) =>{
        console.log("Add Calling..",add);
        for(let i=0;i<1111111111111; i++){    }
        return add
        
    }
    // const num = delay(add)

    const num = useMemo(()=>{
        return delay(add)
    },[add])
    
  return (
    <div>
        <button onClick={()=>setAdd(add+1)}>Add</button>
        <h1>{num}</h1>
        <button onClick={()=>setState(!state)}>Press me</button>
        <h1>{state? "You Clicked":"Click Here.."}</h1>
    </div>
  )
}

export default Memo