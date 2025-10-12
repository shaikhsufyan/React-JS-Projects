 import React, { useRef, useState } from 'react'
 import img1 from "../assets/img1.jpeg"
 import img2 from "../assets/img2.jpeg"
 import img3 from "../assets/img3.webp"
 import img4 from "../assets/img4.jpeg"
 import img5 from "../assets/img5.jpeg"
 import img6 from "../assets/img6.jpg"
 import img7 from "../assets/img7.jpg"
 import img8 from "../assets/img8.jpg"


 
 const DragCard = () => {
    const [data,setData] = useState([
        {
            name:"Alexa",
            city:"USA",
            img:img1
        },
         {
            name:"Alexa",
            city:"USA",
            img:img2
        }, {
            name:"Alexa",
            city:"USA",
            img:img3
        },
         {
            name:"Alexa",
            city:"USA",
            img:img4
        },
         {
            name:"Alexa",
            city:"USA",
            img:img5
        }, {
            name:"Alexa",
            city:"USA",
            img:img6
        }
        , {
            name:"Alexa",
            city:"USA",
            img:img7
        }
        ,{
            name:"Alexa",
            city:"USA",
            img:img8
        }
    ])
    const startIndex = useRef(null)
    const handleOnDrag = (index) =>{
        console.log(index);
        startIndex.current = index;
    }
    const handleDrop = (endIndex) =>{
        let newData = [...data];
        let temp = newData[startIndex.current];
        newData[startIndex.current] = newData[endIndex];
        newData[endIndex] = temp;
        setData(newData)
        
    }
    const handleOnDragOver = (event) =>{
        event.preventDefault()
    }
   return (
     <div>
        <div className='card-container'>
            {data.map((curVal,index,arr)=>{
                return(
                    <div key={index} className='card'
                    draggable
                    onDrag={()=>handleOnDrag(index)}
                    onDrop={()=>handleDrop(index)}
                    onDragOver={(event)=>handleOnDragOver(event)}
                    >
                        <img src={curVal?.img}/>
                        <div>
                            <div>{curVal?.name}</div>
                            <div>{curVal?.city}</div>

                        </div>
                    </div>
                )
            })}
        </div>
     </div>
   )
 }
 
 export default DragCard