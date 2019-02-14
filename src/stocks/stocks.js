import React, { Component } from 'react';
import StocksApi from '../api/stocks/StocksApi';
import Card from 'react-bootstrap/Card';


class Stocks extends Component {

    constructor(props){
        super(props);
        this.state = {
            stockName:   "",
            companyName: "",
            stockSymbol: this.props.stockSymbol, 
            stockPrice:  0,
            ceo: "",
            timer: Date.now()
        };
        this.setData();
    }

    componentDidMount() {
        let self = this;
        this.timerID = setInterval(
          
          () => {
            self.setState(
                {
                    timer: Date.now()
                }
            )
          },
          1000
        );
    }

    setData = function(){
        StocksApi.Stocks.getPrice(this.state.stockSymbol).then( (response) => {
            this.setState({
                stockPrice: response
            })
        });
        StocksApi.Stocks.byName(this.state.stockSymbol).then( (response) => {
            this.setState({
                companyName: response.companyName,
                ceo: response.CEO
            });
        });
    };

    render(){
        var self = this;
        return(
            <Card className="stock-box">
                <Card.Body>
                    <Card.Title>{this.state.stockSymbol}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.companyName}</Card.Subtitle>
                    <Card.Text className="stock-text">
                        Preço: U$ {this.state.stockPrice}
                        <br></br>
                        Ceo: {this.state.ceo}
                        <br></br>
                        <small className="text-muted">Last updated: {this.state.timer.toLocaleString()}</small>
               
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }

}

export default Stocks;
