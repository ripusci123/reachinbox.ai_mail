// src/App.js
import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';  // Correct path
import Login from './components/Login';
import Onebox from './components/Onebox';
import './App.css';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <button onClick={toggleTheme} className="theme-toggle-button">
        Toggle Theme
      </button>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/onebox" element={<Onebox />} />
      </Routes>
    </div>
  );
};

export default App;
