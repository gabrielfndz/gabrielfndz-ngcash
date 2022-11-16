import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Form, Container, Button, Alert } from 'react-bootstrap';
import handleFetch from '../services/requests';
import { Navigate } from 'react-router-dom';

const Transaction = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [loggedUser, setLoggedUser] = useState('');
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('')


  useEffect(() => {
    setLoggedUser(localStorage.getItem('user'));
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = {
      debitedAccount: loggedUser,
      creditedAccount: name,
      value,
    }
    try {
      const newTransaction = await handleFetch('POST', '/transactions', data)
      console.log(newTransaction);
      if(newTransaction.message) {
        return setMessage(newTransaction.message);
      }  
      if (newTransaction) {
        setSuccess(true);
      }
    } catch (e) {
      setSuccess(false);
    }

  }

  if(success) return <Navigate to="/dashboard" />

  return (
    <>
      <Header />
      <Container className="mt-5">
       {
          message ?
          <Alert variant='danger' className="mt-4">
            { message }
          </Alert>
          : ''
        }
        <h1>Nova Transação</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Conta de destino</Form.Label>
            <Form.Control
             type="text" 
             placeholder="Insira o nome do usuário" 
             onChange={({ target: { value } }) => setName(value)}
             />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Valor</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Insira o valor" 
              onChange={({ target: { value } }) => setValue(value)}/>
          </Form.Group>
          <Button 
            variant='dark'
            onClick={ (event) => handleSubmit(event) }
          >
            Enviar
          </Button>
        </Form>
       
      </Container>
    </>
  )
}

export default Transaction;
