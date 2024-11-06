"use client"

import React from 'react'
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import Gallery from './Pages/Gallery/Gallery';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Test from './API/test';

const App = () => {
  return (
    <div className='App grid grid-cols-1 gap-4'>
      <Nav />
      <Home />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <Test />
    </div>
  )
}

export default App;