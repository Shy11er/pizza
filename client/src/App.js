import React from 'react';
import Info from './components/Info';
import Main from './components/Main';
import Navbar from './components/navbar/Navbar';
import Restouran from './components/Restouran';
import Service from './components/Service';
import WorkInfo from './components/WorkInfo';
import Trash from './components/Trash';

const App = () => {
  return (
    <>
      <Navbar />    
      <Main />
      <Info />
      <Restouran />
      <Service />
      <WorkInfo />
      <Trash />
    </>
  )
}

export default App