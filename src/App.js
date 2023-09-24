import React from 'react';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Footer from './Components/Footer';
import { Hero } from './Components/Hero';
import Nav from './Components/Nav';
import Herotwo from './Components/Herotwo';
import Herothree from './Components/Herothree';
import Team from './Components/Team';
import Testimonials from './Components/Testimonials';
import Gallery from './Components/Gallery'; // Import Gallery component
import About from './Components/About';
import Listings from './Components/Listings';
import Contact from './Components/Contact';


function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <Nav />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
    <Hero />
      <Herotwo />
      <Herothree />
      <Team />
      <Gallery />
      <Testimonials />

    </>
  );
}

export default App;
