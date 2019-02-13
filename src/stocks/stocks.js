import React, { Component } from 'react';
import StocksApi from '../api/stocks/StocksApi';



class Stocks extends Component {

    constructor(props){
        super(props);
        this.state = {
            stockName: "AAPL",
        };
    }

    render(){
        console.log(StocksApi.Stocks.byName(this.state.stockName))
        return(
            <div class="stock-box">
                Nome da Ação: {this.state.stockName}
            </div>
        );
    }

}

export default Stocks;
