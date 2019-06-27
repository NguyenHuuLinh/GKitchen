import React from 'react';
import {BrowserRouter} from "react-router-dom"

//CSS
import './App.css';

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
