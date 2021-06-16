import React from 'react';
import './App.css';
import Navbar from "./View/components/Navbar/Navbar";
import Logo from "./View/components/Logo/Logo";
import Container from "./View/components/Container/Container";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>
      
      <Navbar /> 
      <Logo /> 
      <Container    />
      
      
    </Router>
  );
}

export default App;
