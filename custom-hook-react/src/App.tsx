import React from 'react'
import useToggle from './useToogle'

const App = () => {
  const [val,toggle] = useToggle()
  return (
    <div>
      <button onClick={toggle}>Click</button>
      <button onClick={()=>toggle(true)}>Show Data</button>
      <button onClick={()=>toggle(false)}>Hide Data</button>
      <h1 style={{background:val?'green':'red'}}>{val? 'Show':"Hide"}</h1>
    </div>
  )
}

export default App