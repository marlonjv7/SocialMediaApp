import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../containers/Main';
import { Register } from '../containers/Register';

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/Register' element={<Register/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes;