import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Header from '../components/Header';
import handleFetch from '../services/requests';


import { 
  Card,  
  Col,
  Row,
  Container,
  Table,
  Button,
} from 'react-bootstrap';

const Dashboard = () => {
  const [user, setUser] = useState(''); 
  const [account, setAccount] = useState([]);
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const getUserInfos = async () => {
      const userData = await handleFetch('GET', '/dashboard')
      console.log(userData)
      setUser(userData);
      setAccount(userData.Accounts);
    }
    getUserInfos();
  }, []);

  useEffect(() => {
    const getTransactions = async () => {
      const data = await handleFetch('GET', '/transactions')
      const transactionList = data.slice(0, 5);
      setTransactions(transactionList);
    }
    getTransactions();
  }, [])

  return (
    <>
    <Header />
    <Container>
      <Row className='mt-5'>
        <Col xs={12} md={12} sm={12}>
          <Card
            bg='ark'
            style={{ height: '10em' }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title className='fw-bold'>
                { `Olá, ${user.username} :)` }
              </Card.Title>
              <Card.Subtitle className='fw-bold mt-3'>
                
                { `Meu Saldo: ${account.balance}`}
              </Card.Subtitle>
             <a href="/transaction">
              <Button variant='dark' className="mt-4">
                Nova Transação
              </Button>
             </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={12} sm={12} className="mt-5">
          <h1>Últimas Transações</h1>
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
          <a href="transactions">
            <Button variant='dark'>
              Ver todas as transações
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Dashboard;