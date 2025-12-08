import React, { useState,Suspense } from 'react'
// import ShowCounts from './Component/ShowCounts';
const ShowCounts = React.lazy(()=>import('./Component/ShowCounts'))

const App = () => {
  const [count,setCount] = useState(0);
  return (
    <div>
    <Suspense fallback={<p>Component Loading</p>}>
<ShowCounts count={count}/>
    </Suspense>
     
     <div className='btn'>
      <button onClick={()=>setCount((preCount)=>preCount+1)}>Counter</button>
     </div>
    </div>
  )
}

export default App