import React from 'react'
import './App.css';


import Footer from './Components/Footer';
import { Hero } from './Components/Hero';
import Nav  from './Components/Nav';

const  Gallery = React.lazy(() =>
import('./Components/Gallery'))



function App() {
  return (
    <div className='container-fluid' >
     
      <Nav />
   <Hero />
     <Gallery />
    
     <Footer />
    
   
    </div>
  );
}

export default App;
