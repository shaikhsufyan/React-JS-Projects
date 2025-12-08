import React, { useEffect, useMemo } from 'react'
import datas from "./data.json"
const getLength = (arr)=>{
        console.log("Total counts");
        
        let totalCounts = 0;
        for(let i=0;i<arr.length; i++){
            totalCounts++
        }
        return totalCounts;
    }
const ShowCounts = ({count}) => {
   
     
     let totalData = useMemo(()=> getLength(datas) ,[])
     useEffect(()=>{
         window.addEventListener("load",console.log("LOADED") )
     },[])
  return (
    <div>
        <p>React CODE Optimization!</p>
        <p>Total Data : {totalData}</p>
        <p>Count : {count}</p>
    </div>
  )
}

export default ShowCounts