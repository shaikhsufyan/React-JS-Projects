 import React, { useEffect, useOptimistic, useState } from 'react'
 
 const Optimistics = () => {
    const [value,setValue] = useState();
    const [skill,setSkill] = useState([])
    const [optimistic,setOptimistic] = useOptimistic(skill)
    useEffect(()=>{
        getSkills() 
    },[])
    const delay = () =>{
        return new Promise((res)=>setTimeout(res,3000))
    }
    const getSkills = async() =>{
        const skills = await fetch("http://localhost:3000/skills");
        const res = await skills.json();
        setSkill(res)
        
    }
    const addSkill = async() =>{
        let id = Math.trunc(Math.random()*1000);
        let newSkill = {name:value,id};
        setOptimistic((preData)=>[...preData,newSkill])
        const create = await fetch("http://localhost:3000/skills",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newSkill)
        })
        let res = create.json();
        await delay()
        if(res){
            getSkills()
        }
    }
   return (
     <div>
       <form action={addSkill}>
         <input type='text' onChange={(e)=>setValue(e.target.value)}/>
        <button>Add Skill</button>
       </form>
        {optimistic.map((curItem,i)=>{
            return(
                <div key={i}>{curItem.name}</div>
            )
        })}
     </div>
   )
 }
 
 export default Optimistics