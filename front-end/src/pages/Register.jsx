import React, { useState } from 'react';
import '../styles/pages/register.css'
import handleFetch from '../services/requests';
import { Alert } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSucess] = useState(false);

  const handleSubmit = async () => {
    const register = await handleFetch('POST', '/login/register', { username: user, password });

    if(register.message) {
      return setMessage(register.message);
    }  

    if(register) {
      setSucess(true);
    }
  }

  if(success) return <Navigate to="/login" />

  return (
    <div className="login-body">
      <div className="center">
        <h1>Registrar-se</h1>
      
        <form>
          <div className="input-text">
            <label htmlFor='username'>
              Nome
              <input 
                type="text"
                placeholder="Insira seu nome"
                onChange={ ({ target: { value } }) => setUser(value) }
              />
            </label>
          </div>
          <div className="input-text">
            <label htmlFor='password'>
              Senha
              <input 
                type="password"
                placeholder="Insira sua senha"
                onChange={ ({ target: { value } }) => setPassword(value) }
              />
            </label>
          </div>
          <div className="button-submit">
            <button
              className="register-btn"
              type="button"
              onClick={ handleSubmit }
            >
              Registrar
            </button>            
          </div>
          <div className="register-div">
          <p>
              Já possui uma conta?   
              <a href="/login" className="mt-3">   
                Logar
              </a>
            </p>           
          </div>
        </form>
        {
          message ?
          <Alert variant='danger'>
            { message }
          </Alert>
          : ''
        }
      </div>

    </div>
  )
}

export default Register;