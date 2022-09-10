import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

import s from './Header.module.scss'

const Header = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut());
        sessionStorage.clear();
        navigate('/');
    };

    return (
        <div className={s.header}>
            <h1 onClick={handleLogout}>Выход</h1>
        </div>
    );
};

export default Header;