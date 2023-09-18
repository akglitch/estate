import React from 'react'
import './App.css';


import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import { Hero } from './Components/Hero';
import Nav from './Components/Nav';
import { Container } from '@nextui-org/react';



function App() {
  return (
    <div >
      <Container >
      <Nav />
   <Hero />
     <Gallery />
     <Footer />
      </Container>
   
    </div>
  );
}

export default App;
