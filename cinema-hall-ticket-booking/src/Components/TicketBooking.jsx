import React, { useState } from "react";

const TicketBooking = () => {
    const [selectedSeat,setSelectedSeat] = useState([]);
    const [booked,setBooked] = useState([])
  const categorySeat = {
    Regular: { row: ["A", "B"], price: 150, color: "rgb(233, 233, 233)" },
    Premium: { row: ["C", "D", "E"], price: 200, color: "lightSkyblue" },
    VIP: { row: ["F", "G", "H"], price: 300, color: "gold" },
  };
  const cinemaSeat = Array.from({length:12});

  const selectSeat = (seatId) =>{
   if(selectedSeat.includes(seatId)){
    let filterData = selectedSeat.filter((curVal,i)=>{
        return curVal !== seatId
    });
    setSelectedSeat(filterData);
    return;
   }
    setSelectedSeat((prev)=>[...prev,seatId])
    
  }

  const totalPrice = selectedSeat.reduce((sum,curVal)=>{
    console.log(curVal)
    const category = curVal[0];
    const isExist = Object.values(categorySeat).filter((curVal)=>{
         
        return curVal.row.includes(category)
    })
    console.log("isE",isExist);
    return sum + (isExist ? isExist[0].price : 0)
    
  },0)

  const bookSeat = () =>{
    if(selectedSeat.length === 0){
        alert("First select seat");
        return;
    };
    setBooked((prev)=>[...prev,...selectedSeat]);
    setSelectedSeat([])
  }
  return (
    <div>
      <div className="container">
        <div className="screen"></div>
        <div style={{ textAlign: "center" }}>Screen</div>
        <div>
          {Object.entries(categorySeat).map(
            ([category, { row, price, color }]) => {
              return row.map((row, index) => {
                return (
                  <div className="seats" key={index}>
                    <span>{row}</span>
                     <div className="btn-parent">
                    {cinemaSeat.map((_,index)=>{
                        const seatId = row+(index+1)
                        const seat = index+1;
                        const isSelected = selectedSeat.includes(seatId);
                        const isBooked = booked.includes(seatId);
                        return(
                            
                            <button disabled={isBooked} key={index} style={{backgroundColor:isBooked ? "red" :isSelected ? "rgb(56, 254, 56)" : color}}
                            onClick={()=>selectSeat(seatId)}
                            >{seat}</button>
                            
                        )
                    })}
                     </div>
                  </div>
                );
              });
            }
          )}
        </div>
        {/* category with price */}
        <div className="price-indicator">
            {Object.entries(categorySeat).map((curValue,index)=>{
                const category = curValue[0]
                return(
                    <div key={index} style={{display:"flex",alignContent:"center",gap:"0.3em"}}>
                        <div className="price-color" style={{backgroundColor:curValue[1].color}}></div><div>{`${category}(${curValue[1].price})`}</div>
                    </div>
                )
            })}
             <div style={{display:"flex",alignContent:"center",gap:"0.2em"}}>
                        <div className="price-color" style={{backgroundColor:"red"}}></div><div>Booked</div>
                    </div>
        </div>
        {/* seat information */}
        <div>
            {selectedSeat.length > 0 ? 
            <div className="seat-details">
                <div>Selected Seats : {selectedSeat.join(", ")}</div>
                <div>No. of Seats : {selectedSeat.length}</div>
                <div>Price : {totalPrice}</div>
            </div>
             : "No Seat Selected"}
        </div>
        <div className="book-btn">
            <button className="book-seat" onClick={bookSeat}>Book Seat</button>
        </div>
      </div>
    </div>
  );
};

export default TicketBooking;
