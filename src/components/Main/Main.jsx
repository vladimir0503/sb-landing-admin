import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Catalog from '../../features/Catalog/components/Catalog';

const Main = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Catalog />}/>
                <Route path='/card/:name/:id' element={<h1>Card</h1>}/>
            </Routes>
        </div>
    )
}

export default Main