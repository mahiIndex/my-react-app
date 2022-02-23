import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';
import TextForm from './components/TextForm';

import React from "react";
import {
  BrowserRouter,
  Route, Routes
  //Link
} from "react-router-dom";
//import {BrowserRouter, Route, Routes ,NavLink} from 'react-router-dom';
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
      if(mode === 'light'){
        setmode ('dark');
        document.body.style.backgroundColor = "gray";
        showAlert("Dark mode is enabled", "success");
        document.title = 'My Frist App - Dark mode enabled';
      }
      else{
      setmode ('light');
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled", "success");
      document.title = 'My Frist App - Light mode enabled';

    }
  }
  return (
    <>
    <Navbar  title="propes in title" aboutText="about us" mode={mode} toggleMode={toggleMode} />
    <Alert  alert={alert} />
    <BrowserRouter>
      <Routes>
        <Route exact  path='/' element={<TextForm/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
    {/* <TextForm heading="this is ha props heading" mode={mode} showAlert={showAlert} /> */}
    </>
  );
}

export default App;
