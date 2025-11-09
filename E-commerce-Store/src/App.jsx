import React from 'react'
import Products from './Component/Products'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductDetails from './Component/ProductDetails'
 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='user/:id' element={<ProductDetails/>}/>

      </Routes>
    </BrowserRouter>
    
 
  )
}

export default App