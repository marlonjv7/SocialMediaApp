import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../containers/Login';
import Main from '../containers/Main';
import { Register } from '../containers/Register';

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/Register' element={<Register/>} />
                    <Route path='/Login' element={<Login/>} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes;