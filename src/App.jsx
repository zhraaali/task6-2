import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import Hero from './modules/Home/components/Hero/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from './modules/Home/components/Section1/Section1';
import Section2 from './modules/Home/components/Section2/Section2';
import Home from './modules/Home/components/Home/Home';
import About from './modules/About/About';
import Service from './modules/Service/Service';

function App() {
  const [open,setopen]=useState(false)
  return (
    <>
    
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
      {/* <Hero/>
      <Section1/>
      <Section2/> */}
      {/* open={open} onclose={()=>setopen(false)} */}
    </>
  );
}

export default App;
