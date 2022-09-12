import { createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
    product: null,
    isLoading: false
};

const productCardSlice = createSlice({
    name: 'productCard',
    initialState,
    reducers: {
        getProductCard: (state, action) => {
            state.product = action.payload
        },
        toggleLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
});

export const { getProductCard, toggleLoading } = productCardSlice.actions;

export const fetchProductCard = (catalogName, id) => async dispatch => {
    dispatch(toggleLoading(true));
    const product = await api.getProductInfo(catalogName, id);
    dispatch(getProductCard(product))
    dispatch(toggleLoading(false));
    return product;
};

export const changeProductCard = (catalogName, id, data) => async dispatch => {
    try {
        await api.changeProductInfo(catalogName, id, data);
        dispatch(getProductCard(data));
    } catch (error) {
        alert('Ошибка сервера');
        console.error(error);
    };
};

export default productCardSlice.reducer;