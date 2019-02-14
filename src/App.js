import React, { Component } from 'react';
import Stocks from './stocks/stocks.js';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {

    
    const items = [];
    for (var i=0; i < 10; i++){
      items.push(<Stocks></Stocks>)
    }

    return (
      
      <div className="App">

        <Container>
            <Row>
              <Col md={4}>
                <Stocks stockSymbol="AAPL"></Stocks>
              </Col>
              <Col md={4}>
                <Stocks stockSymbol="GOOGL"></Stocks>
              </Col>
              <Col md={4}>
                <Stocks stockSymbol="MSFT"></Stocks>
              </Col>

            </Row>
          </Container>
      </div>
    );
  }
}

export default App;
