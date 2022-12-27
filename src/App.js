import React from 'react';
import { GlobalStyled } from './GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/Layout/NavBar";


function App() {
  return (
    <>
      <GlobalStyled />
      <NavBar />
    </>
  );
}

export default App;
