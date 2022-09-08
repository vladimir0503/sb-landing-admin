import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Catalog from '../../features/Catalog/components/Catalog';
import ProductCard from '../../features/productCard/components/ProductCard';

const Main = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Catalog />}/>
                <Route path='/card/:name/:id' element={<ProductCard />}/>
            </Routes>
        </div>
    )
}

export default Main