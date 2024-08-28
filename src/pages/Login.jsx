import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar(); // Get the enqueueSnackbar function

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login/login', { email, password });
      if (response.status === 200) {
        // Navigate to the home route
        navigate('/');
        // Show success snackbar
        enqueueSnackbar('Logged in successfully!', { variant: 'success' });
      }
    } catch (error) {
      console.error('Login error:', error);
      enqueueSnackbar('Invalid email or password', { variant: 'error' });
    }
  };

  return (
    <div className="loginjob-container">
      <h2 className="loginjob-heading">Login to continue</h2>
      
      <div className="loginjob-vector">
        <img src="https://img.freepik.com/premium-vector/log-flat-style-design-vector-illustration-stock-illustration_357500-771.jpg" alt="Login illustration" />
      </div>
      
      <form className="loginjob-form" onSubmit={handleLogin}>
        <div className="loginjob-form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        
        <div className="loginjob-form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        
        <button type="submit" className="loginjob-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
