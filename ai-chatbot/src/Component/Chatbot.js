import axios from 'axios';
import React, { useState } from 'react'
import { HashLoader } from 'react-spinners';

const Chatbot = () => {
    const [inputData, setInputData] = useState("");
    const [qns,setQns] = useState("Hi");
    const [ans, setAns] = useState("Hello, how can i help you !")
    const [loading, setLoading]= useState(false);
    const [qnsClass,setQnsClass] = useState("show-qns")

    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key="
    const API_KEY = "AIzaSyCBULwJuTKkmM4NailAOacnnS-Gyhb1tj4"
    const sendingData = {
        "contents": [
            {
             "parts":[
                {"text": "What is AI ?"}
            ]
            }
           ]
         }


    const getData = () =>{
        setQnsClass("hide-qns")
        setLoading(true)
        setAns("")
        setQns("")
        const data = axios.post(`${url}+${API_KEY}`,sendingData)
        .then((res)=>{
            // console.log("RES", res.data.candidates[0].content.parts[0].text            );
            setAns(res.data.candidates[0].content.parts[0].text)
            setQns(sendingData.contents[0].parts[0].text)
        setLoading(false)
        setQnsClass("show-qns")

            
        }).catch((err)=>{
            console.log(err);
        setLoading(false)

            
        })
    }


    const handleInput = (event) =>{
       
        const inputValue = event.target.value
        sendingData.contents[0].parts[0].text=inputValue;
        console.log(sendingData);
        
        
    }
  return (
    <div className='container'>
        <div className='data-container'>
            <p className={qnsClass}>{qns}</p>
            <p className='ans'>{ans}</p>
            <div className='loader'>
            <HashLoader  loading={loading}/>
            </div>
        </div>

        <div className='input-container'>
            <input type='text' placeholder='Ask with your AI Friend !' onChange={handleInput}/>
            <button onClick={getData}>Submit</button>
        </div>
    </div>
  )
}

export default Chatbot