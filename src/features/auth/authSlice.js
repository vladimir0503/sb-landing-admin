import { createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

const initialState = {
    authData: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.authData = action.payload
        },
        logOut: state => {
            state.authData = null
        }
    },
});

export const { logIn, logOut } = authSlice.actions;

export const authUser = (mail, password) => async dispatch => {
    const user = await api.authorizeUser(mail, password);
    dispatch(logIn({
        email: user.email,
        id: user.uid,
        token: user.accessToken
    }));
    sessionStorage.setItem('authData', JSON.stringify({ email: user.email, password }))
    return user;
};

export default authSlice.reducer;