import React from 'react';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './pages/Home';
import Exhibition from './pages/Exhibition';
import Artist from './pages/Artist';
import Painting from './pages/Painting';
import Sculpture from './pages/Sculpture';
import Style from './pages/Style';
import ContactForm from './pages/ContactForm';
import Photography from './pages/Photography';
function App() {
 

 return (
  <>
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Exhibition" element={< Exhibition/>} />
    <Route path="/Artist" element={< Artist/>} />
    <Route path="/Style" element={< Style/>} />
    <Route path="/category/Painting" element={< Painting/>} />
    <Route path="/category/Sculpture" element={< Sculpture/>} />
    <Route path="/category/Photography" element={< Photography/>} />
    <Route path="/contact-us" element={< ContactForm/>} />
   </Routes>
   </BrowserRouter>
  </>
 );
}

export default App;
