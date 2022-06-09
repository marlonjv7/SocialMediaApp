import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../containers/Main';
import Search from '../containers/Search';

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/publicaciones' element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes;