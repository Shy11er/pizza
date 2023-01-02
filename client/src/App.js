import React from 'react';
import Info from './components/Info';
import Main from './components/Main';
import Navbar from './components/navbar/Navbar';
import Restouran from './components/Restouran';
import Service from './components/Service';
import WorkInfo from './components/WorkInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />    
      <Main />
      <Info />
      <Restouran />
      <Service />
      <WorkInfo />
      <Contact />
      <Footer />
    </>
  )
}

export default App