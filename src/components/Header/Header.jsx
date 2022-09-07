import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/auth/authSlice';

import s from './Header.module.scss'

const Header = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut());
        sessionStorage.clear();
    };

    return (
        <div className={s.header}>
            <h1 onClick={handleLogout}>Выход</h1>
        </div>
    );
};

export default Header;