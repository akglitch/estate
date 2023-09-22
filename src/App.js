import React from 'react';
import './index.css';
import './App.css';


import Footer from './Components/Footer';
import { Hero } from './Components/Hero';
import Nav  from './Components/Nav';
import Herotwo from './Components/Herotwo';

const  Gallery = React.lazy(() =>
import('./Components/Gallery'))



function App() {
  return (
    <div className='container-fluid' >
     
      <Nav />
   <Hero />
   <Herotwo />
     <Gallery />
    
     <Footer />
    
   
    </div>
  );
}

export default App;
