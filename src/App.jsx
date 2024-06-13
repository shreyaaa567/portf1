import {  } from 'react'

import './App.css';
import Navbar from './componets/Navbar';
import Hero from './Hero';
import About from './componets/About';
import Services from './Services';

function App() {
  

  return (
    <>
    <section className='hero'>
      <Navbar />
      <Hero />
      
    </section>
    < About />
    <Services />
    </>
  )
}

export default App
