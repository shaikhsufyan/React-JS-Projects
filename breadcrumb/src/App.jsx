import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './Components/Home'
import AllProduct from './Components/AllProduct'
import Details from './Components/Details'

const App = () => {
  return (
     <Router>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='all-product' element={<AllProduct/>}/>
        <Route  path='all-product/:id' element={<Details/>}/>


      </Routes>
     </Router>
  )
}

export default App