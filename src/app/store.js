import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import catalogReducer from '../features/Catalog/catalogSlice';
import productCardReducer from '../features/productCard/productCardSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        catalog: catalogReducer,
        productCard: productCardReducer
    },
})