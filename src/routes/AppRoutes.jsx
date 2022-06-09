import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../containers/Main';

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes;