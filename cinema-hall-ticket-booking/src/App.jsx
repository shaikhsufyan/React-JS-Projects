import React from 'react'
import TicketBooking from './Components/TicketBooking'
import useToggle from './Components/useToggle'
 

const App = () => {
  const [data,toggle] = useToggle();
  return (
    <div>

    <button onClick={toggle}>Toggle Data</button>
    <button onClick={()=>toggle(true)}>Show Data</button>
    <button onClick={()=>toggle(false)}>Hide Data</button>
    <h1>{data ? "YES Visible" : null}</h1>
      {/* <TicketBooking/> */}
     
    </div>
  )
}

export default App