import React, { useState,Activity } from 'react'

const ActivityFeature = () => {
    const [show,setShow] = useState(true)
  return (
    <div>
    <button onClick={()=>setShow(true)}>Home</button>
    <button onClick={()=>setShow(false)}>About</button>
   <Activity mode={show===true ? "visible":"hidden"}>
    <Home/>
   </Activity>
   <Activity mode={show===false ? "visible":"hidden"}>
    <About/>
   </Activity>
    </div>
    
  )
}

function Home(){
    return(
        <h1>Home Page</h1>
    )
}
function About(){
    return(
       <div>
         <h1>About Page</h1>
        <input type='text' placeholder='enter name'/>
        <input type='text' placeholder='enter name'/>
        <input type='text' placeholder='enter name'/>

       </div>
    )
}


export default ActivityFeature