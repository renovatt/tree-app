import React from 'react';
import { GlobalStyled } from './GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/Layout/NavBar";
import { Dashboard } from './components/Dashboard'
import { Transactions } from './components/Transactions';
import { Stats } from './components/Stats';


function App() {
  return (
    <>
      <GlobalStyled />
      <div className='App'>
        <Router>
          <NavBar />
          <main className='AppBody'>
            <Routes>
              <Route path='/' element={
                <Dashboard />
              } />
              <Route path='/transactions' element={<Transactions />} />
              <Route path='/stats' element={<Stats />} />
            </Routes>
          </main>
        </Router>
      </div>
    </>
  );
}

export default App;
