import React from 'react';
import  Hero  from './Hero';
import Herotwo from './Herotwo';
import Herothree from './Herothree';
import Team from './Team';
import Testimonials from './Testimonials';
import Gallery from './Gallery'; // Import Gallery component
import Contact from './Contact';

  function Home() {
    return ( 
        <div>
<Hero />
        <Herotwo />
       <Herothree />
        <Team />
        <Gallery />
        <Testimonials />
        <Contact />
        </div>
     );
  }
  
  export default Home;