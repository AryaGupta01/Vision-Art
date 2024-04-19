import React from 'react';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './pages/Home';
import Exhibition from './pages/Exhibition';
import Artist from './pages/Artist';
import Painting from './pages/Painting';
import ContactUs from './pages/ContactUs';
function App() {
 

 return (
  <>
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Exhibition" element={< Exhibition/>} />
    <Route path="/Artist" element={< Artist/>} />
    <Route path="/category/Painting" element={< Painting/>} />
    <Route path="/category/Painting" element={< Painting/>} />
    <Route path="/category/Painting" element={< Painting/>} />
    <Route path="/contact-us" element={< ContactUs/>} />
   </Routes>
   </BrowserRouter>
  </>
 );
}

export default App;
