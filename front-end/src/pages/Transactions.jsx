import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import handleFetch from '../services/requests';

import { 
  Container,
  Col,
  Table,
  Button,
} from 'react-bootstrap';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      const data = await handleFetch('GET', '/transactions')
      setTransactions(data);
    }
    getTransactions();
  }, []);


  return (
    <>
      <Header />      
      <Container className="mt-5">
        <h1>Minhas Transações</h1>
        <Col sm={12} xs={12} md={12}>
          <Table striped>
                <thead>
                  <tr>
                    <th>De</th>
                    <th>Para</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    transactions.map((t) => 
                    <tr key={ t.id }>
                      <td>{ t.debAccount.Users.username }</td>
                      <td>{ t.credAccount.Users.username  }</td>
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