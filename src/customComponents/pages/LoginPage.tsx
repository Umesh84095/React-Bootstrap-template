import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from "./Redux/Action";
import './LoginPage.css'; 
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const LoginPage = () => {
  const navigate = useNavigate();
//   const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'umesh' && password === 'umesh') {
      dispatch(loginSuccess());
      navigate('/header')
      navigate('/dashboard');
    } else {
      alert('Invalid Username or Password');
    }
  };

//   if (isLoggedIn) {
//     return <Navigate to="/Header" />;
//   }

  return (
    <div className='login-page'>
      <div className='login-box'>
        <h1>LinkedIn</h1>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={() => navigate("/dashboard")}> Login </Button>
      </div>
    </div>
  );
};

export default LoginPage;
