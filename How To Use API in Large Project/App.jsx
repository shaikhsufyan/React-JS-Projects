import React, { useEffect, useState } from 'react'
import { getPosts, getPostsById } from './Service/UserService'

const App = () => {
    const [data,setData] = useState([])
    const fetchDatas = async () =>{
       try{
         const data = await getPosts();
         setData(data)
        const getPostByID = await getPostsById(1);
        console.log("POST_BY_ID",getPostByID);
        
       }catch(err){
        console.log(err);
        
       }
        
    }
    useEffect(()=>{
        fetchDatas()
    },[])
  return (
    <div>
        {data.length > 0 ? data.map((curItem)=>{
            return(
                <div>
                    <div>ID :{curItem.id}</div>
                    <div>Title :{curItem.title}</div>
                    <div>Body :{curItem.body}</div>

                </div>
            )
        }):""}
    </div>
  )
}

export default App