import React, { useState } from "react";
import deleteLogo from "./assets/cross.png"

const Chips = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const addChips = (event) => {
    console.log(event);
    if (event.keyCode === 13) {
      if (input !== "") {
        let storeData = [...data, input];
        setData(storeData);
        setInput("")
      }
    }
  };
   
  const deleteChip = (index) =>{
    const filterData = data.filter((curValue,id)=>{
        return index !== id
    })
    setData(filterData)
  }
  return (
    <>
      <div className="container">
        <div className="input-container">
          <h1>Chips Input</h1>
          <input value={input}
            type="text"
            placeholder="Add Chips Here ..."
            onChange={handleInput}
            onKeyUp={addChips}
          />
        </div>

        <div className="chips-container">
            {data != "" ? 
            data.map((curValue,index)=>{
                return(
                    <div className="chipBox">
                        <p>{curValue}</p>
                        <img onClick={()=>deleteChip(index)} className="deleteLogo" src={deleteLogo}/>
                    </div>
                )
            }) : ""
            }
        </div>
      </div>
    </>
  );
};

export default Chips;
