import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContext, CartProvider } from './context/CartContext';
import { useState } from 'react';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';

function App() {

 
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <NavBar />
      
      <Routes>
      <Route path='/' element= {<ItemListContainer />}/>
      <Route path='/productos' element= {<ItemListContainer />}/>
      <Route path='/productos/:categoria' element= {<ItemListContainer />}/>
      <Route path='/item/:id' element= {<ItemDetailContainer />}/>
      <Route path='/carrito' element= {<Carrito />}/>
      <Route path='/checkout' element= {<Checkout />}/>
      </Routes>
      </BrowserRouter>
      </CartProvider>
      
    </div>
  );
}

export default App;
