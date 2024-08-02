// src/components/Login.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'; // Correct path
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Simulate login (you should replace this with actual authentication logic)
    if (email === 'user@example.com' && password === 'password') {
      navigate('/onebox');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className={`login-container ${theme}`}>
      <form onSubmit={handleSubmit} className={`login-form ${theme}`}>
        <h2 className={`login-title ${theme}`}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`login-input ${theme}`}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`login-input ${theme}`}
        />
        <button type="submit" className={`login-button button-${theme}`}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
