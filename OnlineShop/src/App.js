import React, { useEffect, useState, createContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import axios from 'axios';

// components
import Login from './Components/Login';
import Products from './Components/Products';
import NotFound from './Components/NotFound';
import Details from './Components/Details';
import Cart from './Components/Cart/Cart';

// style
import "./App.css";

// context
import ReduserContext from './Components/Reduser';
export const ProductsProvider = createContext();

const App = () => {

  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    const reseveData = async() => {
        await axios.get('https://fakestoreapi.com/products')
        .then(res => setProduct(res.data))
    }
    reseveData();
  }, [])

  return (
    <>
      <ProductsProvider.Provider value={product}>
        <ReduserContext>
            <Routes>
              <Route path='/signup' element={<Login />}/>
              <Route path='/' element={<Products loading={product}/>}/>
              <Route path='/notfound' element={<NotFound />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='/cart/:id' element={<Details/>}/>
              <Route path='/*' element={<Navigate to="/notfound"/>}/>
            </Routes>
        </ReduserContext>
      </ProductsProvider.Provider>
    </>
  );
}

export default App;