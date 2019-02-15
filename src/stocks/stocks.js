import React, { Component } from 'react';
import StocksApi from '../api/stocks/StocksApi';
import Card from 'react-bootstrap/Card';
import moment from 'moment';


class Stocks extends Component {

    constructor(props){
        super(props);
        this.state = {
            stockName:   "",
            companyName: "",
            stockSymbol: this.props.stockSymbol, 
            stockPrice:  0,
            ceo: "",
            timer: moment(),
        };
        var self = this;
        this.tick = this.tick.bind(this);
        this.refreshData = this.refreshData.bind(this);
        this.parseTimer = this.parseTimer.bind(this);
        this.refreshData();
    }

    tick(){
        this.refreshData();
        this.setState({
            timer: moment()
        })
    }

    parseTimer(){
        return this.state.timer.format("DD/MM/YYYY h:mm:ss");
    }

    componentDidMount() {
            setInterval( this.tick(), 10000)
     }
    
    refreshData(){
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
                        <small className="text-muted">Last updated: {this.parseTimer()}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }

}

export default Stocks;
