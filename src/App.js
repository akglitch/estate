import './App.css';


import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import { Hero } from './Components/Hero';
import Nav from './Components/Nav';



function App() {
  return (
    <div >
   <Nav />
   <Hero />
     <Gallery />
     <Footer />
    </div>
  );
}

export default App;
