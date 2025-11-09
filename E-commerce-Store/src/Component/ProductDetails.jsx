 import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
 
 const ProductDetails = () => {
    const [products,setProducts] = useState([]);
    const id = useParams();
    const navigate = useNavigate()
    
    const getProducts = async() =>{
        const fetchProducts = await fetch(`https://fakestoreapi.com/products/${id.id}`);
        const data = await fetchProducts.json();
        setProducts(data)
        console.log("product-details",data);
        
        
    }

    useEffect(()=>{
        getProducts()
    },[])
    const handleBack = (e)=>{
        e.preventDefault();
        navigate("/")
    }
   return (
     <div>
     <a onClick={handleBack} href=''>Back</a>
     <div className='product-container'>
      
        {  
                <div className='card'>
                <img src={products?.image}/>
                <div>{products?.title}</div>
                <div>{products?.price*88}</div>
                </div>
        
        }
     </div>
     </div>
   )
 }
 
 export default ProductDetails