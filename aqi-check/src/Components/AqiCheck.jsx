
import React, { Component, useEffect, useRef, useState } from 'react'

const AqiCheck = () => {
    const [data,setDatas] = useState([])
    const [loader,setLoader] = useState(false)
    const ref= useRef(null)
    
    const cityToLatLong = async(city) =>{
       try{
        if(city == ""){
            setDatas([]);
            return;
        }
        setLoader(true)
         const data = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`);
        const jsonData = await data.json();
        
        let {lat,lon} = jsonData[0];
        if(lat && lon){
            checkAQI(lat,lon,city)
        }
       }catch(err){
        console.log(err);
        setLoader(false)
       }
        
        
    }
    const checkAQI = async (lat,lon,city) =>{
        try{
            const data = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`);
            const jsonData = await data.json();
            setDatas({
                city:city,
                aqi:jsonData.list[0].main.aqi,
                components:jsonData.list[0].components
            })
            setLoader(false)

        }catch(err){
            console.log(err);
            
        }
    
        
    }
    console.log(data);
    
    const handleInput = (e) =>{
        console.log(e.target.value);
        let value = e.target.value;
        if(ref.current){
            clearTimeout(ref.current)
        }
        ref.current = setTimeout(()=>{
            cityToLatLong(value)
        },300)
        
    }
    const aqiLabel = (aqi) =>{
        let map ={
            1:{color:"green",text:"Good"},
            2:{color:"yellow",text:"Moderate"},
            3:{color:"orange",text:"Fair"},
            4:{color:"red",text:"Poor"},
            5:{color:"lab(34.39% 42.46 -46.55)",text:"Very Poor"},

        }
        return map[aqi]
    }
    
  return (
    <div className='container'>
    <div className='search-bar'>
        <input placeholder='Search city' onChange={(e)=>handleInput(e)}/>
    </div>
    <h1>{loader && "Loading..."}</h1>
    {!loader && data.length !== 0 &&
    <div className='card'>
        <h2>{data?.city}</h2>
        <div className='aqi-badge' style={{background:aqiLabel(data?.aqi)?.color}}>
            AQI {data?.aqi} - {aqiLabel(data.aqi)?.text}
        </div>
        <div className='details'>
            <p>CO : {data.components?.co}</p>
            <p>NO2{data.components?.no2}</p>
            <p>O3{data.components?.o3}</p>
            <p>PM2_5{data.components?.pm2_5}</p>
            <p>PM10{data.components?.pm10}</p>
            <p>SO2{data.components?.so2}</p>

        </div>
    </div>}
    </div>
  )
}

export default AqiCheck