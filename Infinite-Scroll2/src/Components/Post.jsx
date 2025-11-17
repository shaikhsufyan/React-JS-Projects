import React,{useEffect} from 'react'
import { ClipLoader } from 'react-spinners';

const Post = ({data,loader,setPage}) => {

    useEffect(()=>{
         let lastImg = document.querySelector(".img:last-child");
             
        const observer = new IntersectionObserver((entries)=>{
            let entry = entries[0];
            if(entry.isIntersecting){
                observer.unobserve(lastImg);
                setPage((prePage)=>prePage+1)
            }
            console.log(entries);
            
            
        },{threshold:1})
        if(lastImg){
            observer.observe(lastImg)
        }
        return()=>{
            if(lastImg){
                observer.unobserve(lastImg)
            }
        }
    },[data])
  return (
    <div>
        <div className='container'>
                    {data.length > 0 ? data.map((curItem,index)=>{
                        return(
                            <img className='img' src={curItem.download_url} key={index}/>
                        )
                    }):null}
        
                </div>
                <div className='loader'>{loader ? <ClipLoader color='blue' size="88px"/> :null}</div>
    </div>
  )
}

export default Post