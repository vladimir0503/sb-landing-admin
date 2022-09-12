import { createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

const initialState = {
    authData: null,
    isLoading: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.authData = action.payload
        },
        toggleLoading: (state, action) => {
            state.isLoading = action.payload
        },
        logOut: state => {
            state.authData = null
        }
    },
});

export const { logIn, logOut, toggleLoading } = authSlice.actions;

export const authUser = (mail, password) => async dispatch => {

    dispatch(toggleLoading(true));
    
    try {
        const user = await api.authorizeUser(mail, password);
        dispatch(logIn({
            email: user.email,
            id: user.uid,
            token: user.accessToken
        }));
        sessionStorage.setItem('authData', JSON.stringify({ email: user.email, password }))
    } catch (error) {
        alert('Неверный логин или пароль');
        console.error(error);
    }finally {
        dispatch(toggleLoading(false));
    };
};

export default authSlice.reducer;