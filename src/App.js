import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom"

//Components
import Header from './Layouts/Header/index'
import GRoute from './Router';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GRoute/>
    </BrowserRouter>
  );
}

export default App;
