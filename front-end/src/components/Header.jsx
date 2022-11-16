import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/header.css'
import { Button } from 'react-bootstrap';

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    navigate('/');
  }

  return (
   <header className="header">
    <div className="header-nav"> 
      <a href="/dashboard">
       <h1>Ng</h1>
      </a>
      <a className="a-nav" href="/transactions"> Minhas Transações</a>
    </div>
    <Button 
      variant='outline-light'
      onClick={ logout }
    >
      Logout
    </Button>
   </header>
  )
}

export default Header;