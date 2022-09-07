import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from '../../features/auth/authSlice';

const url = 'https://engraving-db-13cea-default-rtdb.firebaseio.com/catalog';

const SignIn = () => {
    const [mail, setMail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const dispatch = useDispatch();

    const { authData } = useSelector(state => state.auth);

    const testAddCard = async () => {

        const data = {
            name: 'Гравировка на браслете',
            price: 300,
            article: 21312442,
            
        };

        const res = await fetch(`${url}/bracelets.json`, {
            'method': 'POST',
            'body': JSON.stringify(data)
        })
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await dispatch(authUser(mail, password));
        } catch (error) {
            alert('Неверный логин или пароль');
            console.error(error);
        };
    };

    return (
        <div>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder='mail' type='text' value={mail} onChange={e => setMail(e.target.value)} />
                <input placeholder='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <input type='submit' />
            </form>
            <button onClick={testAddCard}>Добавить карточку</button>
        </div>
    );
};

export default SignIn;