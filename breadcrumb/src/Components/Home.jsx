import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [product,setProduct] = useState([])

    const getProduct = async () =>{
        const products = await fetch(`https://dummyjson.com/products`);
        const jsonData = await products.json();
        console.log(jsonData);
        setProduct(jsonData.products.slice(0,3))
        
    }
    console.log(product);
    
    useEffect(()=>{
        getProduct()
    },[])
  return (
    <div>
    <div>
        <h1 className='heading'>Home Page. Shop Now!</h1>
    </div>
        <div className='home-container'>
            {product?.map((item,index,arr)=>{
                return(
                    <div className='home-card'>
                        <img src={item.thumbnail}/>
                        <p>Category : {item.category}</p>
                        <p>Brand : {item.brand}</p>
                    </div>
                )
            })}
        </div>
        <div className='btn-view'>
            <button><Link to="all-product">View All Product</Link></button>
        </div>
    </div>
  )
}

export default Home