import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import Loading from './Loading';

const App = () => {
  const [datas,setDatas] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const getProducts = async () =>{
    const data = await fetch(`https://fakestoreapi.com/products`);
    const res= await data.json();
    setTimeout(()=>{
     setDatas(res);
     setIsLoading(false)
    },2000)
   
    
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div>
     
      <div className='cards'>

      {isLoading ? 
       <div className='cards'>
        <Loading/>
      <Loading/>
      <Loading/>
      <Loading/>
      <Loading/>
      <Loading/>
       </div>

      :
      datas.map((curItem,i)=>{
          return(
            <div className='card'>
              <img src={curItem?.image}/>
              <p>{curItem?.title}</p>
              <p>{curItem?.category}</p>
              <p>{curItem?.price}</p>

            </div>
          )
        })
      }
        
      </div>
    </div>
  )
}

export default App