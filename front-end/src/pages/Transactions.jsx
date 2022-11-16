import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import moment from 'moment';
import handleFetch from '../services/requests';

import '../styles/pages/transactions.css'

import { 
  Container,
  Col,
  Table,
  Button,
} from 'react-bootstrap';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [tags, setTags] = useState([])

  const getTransactions = async () => {
    const data = await handleFetch('GET', '/transactions');
    setTransactions(data);
  }
  useEffect(() => {
    setTags(['Débitos', 'Créditos', 'Data'])
    getTransactions();
  }, []);


  const handleChange = (value) => {
    const user = localStorage.getItem('user');
    if(value === 'Débitos') {
      const filtered = transactions.filter((t) => t.debAccount.Users.username === user);
      setTransactions(filtered);
    }

    if(value === 'Créditos') {
      const filtered = transactions.filter((t) => t.credAccount.Users.username === user);
      setTransactions(filtered);
    }

    if(value === 'Data') {
      const dateFilter = transactions.sort(function(a, b) {
        let c = new Date(a.createdAt);
        let d = new Date(b.createdAt);
        return c - d;
      })

      setTransactions(dateFilter);
    }
  }

  const clearFilter = async () => {
    await getTransactions();
  }

  return (
    <>
      <Header />      
      <Container className="mt-5">
        <h1>Minhas Transações</h1>
        <Col sm={12} xs={12} md={12}>
          <h5>Filtrar</h5>
          <select
            className="input-filter"
            onChange={ ({ target: { value } }) => handleChange(value) }
          >
            <option >Selecionar</option>
            { tags.map((t) => (
              <option key={t} value={t}>{ t }</option>
            ))}
          </select>
          <Button 
          variant='dark' 
          className="m-2"
          onClick={ clearFilter }
          >
            Limpar Filtro
          </Button>
          <Table striped>

                <thead>
                  <tr>
                    <th>De</th>
                    <th>Para</th>
                    <th>Data</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    transactions.map((t) => 
                    <tr key={ t.id }>
                      <td>{ t.debAccount.Users.username }</td>
                      <td>{ t.credAccount.Users.username  }</td>
                      <td>{ moment(t.createdAt).format('DD/MM/YYYY') }</td>
                      <td>{ t.value }</td>
                      
                    </tr>)
                  }
                </tbody>
            </Table>
            <a href="/dashboard" >
              <Button variant="dark">
                Voltar
              </Button>
            </a>
        </Col>
      </Container>
      
    </>
  )
}

export default Transactions;