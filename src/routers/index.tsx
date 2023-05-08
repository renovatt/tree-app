import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/Layout/NavBar'
import { Dashboard } from '../views/Dashboard'
import { Login } from '../views/Login'
import { Logout } from '../views/Logout'
import { Notes } from '../views/Notes'
import { Register } from '../views/Register'
import { Reset } from '../views/Reset'
import { Expenses } from '../views/Expenses'
import { Transactions } from '../views/Transactions'
import { PrivateRouter } from './PrivateRouter'

export const Routers = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <main className='AppBody'>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/reset' element={<Reset />} />
                    <Route path='/logout' element={<Logout />} />

                    <Route path='/' element={
                        <PrivateRouter>
                            <Dashboard />
                        </PrivateRouter>} />

                    <Route path='/transactions' element={
                        <PrivateRouter>
                            <Transactions />
                        </PrivateRouter>} />

                    <Route path='/expenses' element={
                        <PrivateRouter>
                            <Expenses />
                        </PrivateRouter>} />

                    <Route path='/notes' element={
                        <PrivateRouter>
                            <Notes />
                        </PrivateRouter>} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
