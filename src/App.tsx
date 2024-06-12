import React, { createContext, useState } from 'react';
import './App.css';
import { Services } from './components/Services/Services';
import { Modal } from './components/Modal/Modal';


function App() {

  return (
    <div className="App">
      <Services />
      <Modal />
    </div>
  );
}

export default App;
