import React from 'react'
import Tabs from './Component/Tabs'
 
const App = () => {
  return (
    <>
      <Tabs>
        <div title='Home'>This is Home Page</div>
        <div title='About'>This is About Page</div>
        <div title='Contact'>This is Contact Page</div>

      </Tabs>
    </>
  )
}

export default App