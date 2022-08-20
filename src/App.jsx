import React from 'react';
import Carousel from './Components/Carousel/Carousel';
import Destinations from './Components/Destinations/Destinations';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Selects from './Components/Selects/Selects';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Selects />
      <Carousel />
    </>
  );
}

export default App;