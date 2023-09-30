import React from 'react';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Footer from './Components/Footer';

import Nav from './Components/Nav';

import About from './Components/About';
import Listings from './Components/Listings';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Header from './Components/Header';


function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <Nav />
        <Header />
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



export default App;
