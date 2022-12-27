import React from 'react';
import { GlobalStyled } from './GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/Layout/NavBar";
import { Dashboard } from './components/Dashboard'
import { Transactions } from './components/Transactions';
import { Stats } from './components/Stats';


function App() {
  const dataBase = localStorage.getItem("transactions")
  const [transactionsList, setTransactionsList] = React.useState(
    dataBase ? JSON.parse(dataBase) : []
  )

  const [earn, setEarn] = React.useState(0)
  const [spent, setSpent] = React.useState(0)
  const [wallet, setWallet] = React.useState(0)

  React.useEffect(() => {
    const amountEarn = transactionsList
      .filter(item => item.type === 'earn')
      .map(transactions => Number(transactions.amount))
    const amountSpent = transactionsList
      .filter(item => item.type === 'spent')
      .map(transactions => Number(transactions.amount))

    const earnSum = amountEarn.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    const spentSum = amountSpent.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    const total = Math.abs(earnSum - spentSum).toFixed(2)

    setEarn(earnSum)
    setSpent(spentSum)
    setWallet(`${Number(earnSum) < Number(spentSum) ? "-" : ''} R$ ${total} `)
  }, [transactionsList])

  const handleAddition = (transaction) => {
    const updatedTransactionsList = [...transactionsList, transaction]
    setTransactionsList(updatedTransactionsList)
    localStorage.setItem("transactions", JSON.stringify(updatedTransactionsList))
  }
  return (
    <>
      <GlobalStyled />
      <div className='App'>
        <Router>
          <NavBar />
          <main className='AppBody'>
            <Routes>
              <Route path='/' element={
                <Dashboard
                  earn={earn}
                  spent={spent}
                  wallet={wallet}
                  handleAddition={handleAddition}
                  transactionsList={transactionsList}
                />} />
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
