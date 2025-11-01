import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

const Details = () => {
    const [product,setProduct] = useState([]);
    const param = useParams()

    const getProduct = async () =>{
        const productId = param.id
        const products = await fetch(`https://dummyjson.com/products/${productId}`);
        const jsonData = await products.json();
        console.log(jsonData);
        setProduct(jsonData)
        
    }
    console.log("Product",product);
    
    useEffect(()=>{
        getProduct()
    },[])
  return (
    <div>
    
    <div>
        <h1 className='heading'>Product Details Shop Now!</h1>
    </div>
     <Breadcrumb/>
        <div className='home-container'>
            
                    <div className='details-card'>
                        <img src={product.thumbnail}/>
                        <p>Category : {product.category}</p>
                        <p>Brand : {product.brand}</p>
                        <p>Description : {product.description}</p>
                    </div>
           
        </div>
        
    </div>
  )
}

export default Details