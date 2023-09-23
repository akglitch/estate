import React from 'react';
import './index.css';
import './App.css';


import Footer from './Components/Footer';
import { Hero } from './Components/Hero';
import Nav  from './Components/Nav';
import Herotwo from './Components/Herotwo';
import Herothree from './Components/Herothree';

const  Gallery = React.lazy(() =>
import('./Components/Gallery'))



function App() {
  return (
    <div className='container-fluid' >
     
      <Nav />
   <Hero />
   <Herotwo />
   <Herothree />
     <Gallery />
    
     <Footer />
    
   
    </div>
  );
}

export default App;
