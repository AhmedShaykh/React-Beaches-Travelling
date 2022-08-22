import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Destinations from './Components/Destinations/Destinations';
import Selects from './Components/Selects/Selects';
import ImgCarousel from './Components/Carousel/ImgCarousel';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Selects />
      <ImgCarousel />
      <Footer />
    </>
  );
}

export default App;