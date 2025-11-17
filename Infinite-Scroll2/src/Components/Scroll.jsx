 import React, { useEffect, useState } from 'react'
 import { ClipLoader } from 'react-spinners';
import Post from './Post';
 
 const Scroll = () => {
    const [page,setPage] = useState(1);
    const [data,setData] = useState([]);
    const [loader,setLoader] = useState(false)
    const getData = async () =>{
        setLoader(true)
        const url  = `https://picsum.photos/v2/list?page=${page}&limit=6`;
        const data = await fetch(url);
        const res = await data.json();
        setData((preData)=>[...preData, ...res])
        setTimeout(()=>{
            setLoader(false)
        },4000)
        
    }
    useEffect(()=>{
        getData()
    },[page])

   return (
     <div>
        <Post data={data} loader={loader} setPage={setPage}/>
     </div>
   )
 }
 
 export default Scroll