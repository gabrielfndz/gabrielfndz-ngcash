import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import handleFetch from '../services/requests';
import '../styles/pages/login.css'

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLogged, setIsLogged] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await handleFetch('POST', '/login', { username, password })
      localStorage.setItem('user', user.username);
      localStorage.setItem('token', user.token);
      if (user !== undefined) {
        setIsLogged(true)
      }
    } catch (e) {
      setIsLogged(false);
      console.log(e.message);
    }
  }

  return (
    <div className="login-body">
      <div className="center">
        <h1>Login</h1>
      
        <form>
          <div className="input-text">
            <label htmlFor='username'>
              Nome
              <input 
                type="text"
                placeholder="Insira seu nome"
                onChange={ ({ target: { value } }) => setUsername(value) }
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
          <div>
            <button
              className="login-btn"
              type="button"
              onClick={ (event) => handleSubmit(event) }
            >
              Login
            </button>            
          </div>
          <div className="register-div">
          <p>
              Não tem uma conta?   
              <a href="/register" className="mt-3">   
                Registre-se
              </a>
            </p>           
          </div>
        </form>
      </div>
      {
        isLogged ?
        <Navigate to="/dashboard" />
        : ''
      }
    </div>
  )
}

export default Login;