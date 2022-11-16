import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Transaction from './pages/Transaction';
import Transactions from './pages/Transactions';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/dashboard" element={ <Dashboard /> } />
      <Route path="/transaction" element={ <Transaction /> } />
      <Route path="/transactions" element={ <Transactions /> } />
    </Routes>
  );
}

export default App;
