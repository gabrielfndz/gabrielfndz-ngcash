import React, { useState } from 'react';
import '../styles/pages/register.css'

const Register = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

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
            >
              Registrar
            </button>            
          </div>
        </form>
      </div>

    </div>
  )
}

export default Register;