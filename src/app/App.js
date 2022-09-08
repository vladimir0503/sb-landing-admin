import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authUser } from '../features/auth/authSlice';
import SignIn from '../components/SignIn/SignIn';
import Main from '../components/Main/Main';

import './App.scss';

function App() {

  const { authData } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('authData'));
    if (user) {
      dispatch(authUser(user.email, user.password))
    };
  }, []);

  return (
    <div>
      {!authData ? <SignIn /> : <Main />}
    </div>
  );
};

export default App;