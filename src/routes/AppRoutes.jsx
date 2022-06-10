import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../containers/Login';
import Main from '../containers/Main';
import { Register } from '../containers/Register';
import Search from '../containers/Search';


const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/publicaciones' element={<Search />} />

                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes;