import React from 'react';
import logo from '../../images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from '../../features/auth/authSlice';
import Loader from '../common/Loader/Loader';

import s from './SignIn.module.scss';

const SignIn = () => {
    const [mail, setMail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { isLoading } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();
        dispatch(authUser(mail, password));
    };

    return (
        <div className={s.signIn}>
            <img src={logo} alt='logo' />
            <form className={s.authForm} onSubmit={handleSubmit}>
                <h1>МАСТЕРСКАЯ<br></br> ГРАВИРОВКИ</h1>
                <input placeholder='mail' type='text' value={mail} onChange={e => setMail(e.target.value)} />
                <input placeholder='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <button disabled={isLoading}>ВОЙТИ</button>
                {isLoading && <Loader />}
            </form>
        </div>
    );
};

export default SignIn;