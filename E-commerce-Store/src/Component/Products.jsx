 import React, { use, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
 
 const Products = () => {
    const [products,setProducts] = useState([]);
    const [allProducts,setAllProducts] = useState([]);
    const [category,setCategory] = useState("All")
    const navigate = useNavigate();
    const getProducts = async() =>{
        const fetchProducts = await fetch(`https://fakestoreapi.com/products`);
        const data = await fetchProducts.json();
        setProducts(data)
        setAllProducts(data)
    }

    useEffect(()=>{
        getProducts()
    },[])

    const showDetail = (cardDetails) =>{
        let id = cardDetails.id
        navigate(`user/${id}`)
    }
    const handleSearch = (e)=>{
        let searchValue = e.target.value;
         
        let filtered = allProducts.filter((curVal)=>{
            return curVal.title.toLowerCase().includes(searchValue.toLowerCase())
        })
        setProducts(filtered)
    }
    const handleSelect = (e) =>{
        let selectVal = e.target.value;
        let allData = [...allProducts];
        setCategory(selectVal);
        if(selectVal == "Price low to high"){
            let sorting = [...allProducts].sort((a,b)=>{
                return a.price - b.price;
            });
            setProducts(sorting)
        }
        if(selectVal == "Price high to low"){
            let sorting = [...allProducts].sort((a,b)=>{
                return b.price - a.price;
            });
            setProducts(sorting)
        }
        if(selectVal == "all"){
            
            setProducts(allData)
        }
         
    }
   return (
     <div>
     <div className='navbar'>
        <div>
            <p className='heading'>TRENDS</p>
        </div>
        <div>
            <input placeholder='Search...' onChange={handleSearch}/>
        </div>
        <div>
            <select value={category} onChange={handleSelect}>
                <option value="all">All products</option>
                <option value="Price low to high">Price low to high</option>
                <option value="Price high to low">Price high to low</option>

            </select>
        </div>
     </div>
     <div className='product-container'>
        {products.length > 0 ? products.map((curVal,index)=>{
            return(
                <div className='card' key={index} onClick={()=>showDetail(curVal)}>
                <img src={curVal?.image}/>
                <div>{curVal?.title}</div>
                <div>₹{curVal?.price*88}</div>
                </div>
            )
        }) : 
        <p>Sorry! No product available</p>
        }
     </div>
     </div>
   )
 }
 
 export default Products