import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stocks from './Stocks.js';


class StockManager extends Component {

    constructor(props){
        super(props);
        this.state = {
            stocks: [],
        };
        
        this.addStock = this.addStock.bind(this);
        this.removeStock = this.addStock.bind(this);
        this.clear = this.clear.bind(this);
    }

    clear(){
        this.setState({ stocks:[] });
    }

    removeStock(){
        alert("ainda nao implementado");
    }

    addStock(stockSymbol){
        let stock = <Stocks stockSymbol={stockSymbol}></Stocks>;
        this.setState(prevState => ({
            stocks: [...prevState.stocks, stock]
        }))
    }

    render(){
        return(
            <div>
                <Row>
                    {this.state.stocks.reverse().map(item => (
                        <Col sm={4}>
                            {item}
                        </Col>
                    ))}
                </Row>
             </div>
        );
    }

}

export default StockManager;
