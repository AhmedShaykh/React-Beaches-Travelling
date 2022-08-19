import React from 'react';
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
    </>
  );
}

export default App;