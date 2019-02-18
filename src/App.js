import React, { Component } from 'react';
import Stocks from './stocks/Stocks.js';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Title from './stocks/layout/title';
import Row from 'react-bootstrap/Row';
import logo from './logo.svg';
import StockForm from './stocks/StockForm';
import StockManager from './stocks/StockManager';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Container>
        <Row>
          <Col>
            <StockForm></StockForm>
          </Col>
        </Row>
      
      </Container>
        <Container>
          <Row className="text-center">
            <Col sm={12}>
              <Title></Title>
            </Col>
          </Row>
        </Container>

        <Container>
          <StockManager></StockManager>
        </Container>
      </div>
    );
  }
}

export default App;
