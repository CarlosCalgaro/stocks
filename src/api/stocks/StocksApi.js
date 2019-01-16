
var StocksApi = {
    
    API: {
        baseUrl: 'https://api.iextrading.com/1.0/'
    },

    Stocks: {
        byName: (name) => {
            let url = StocksApi.API.baseUrl + 'stock/' + name + '/company';
            return fetch(url).then(response => response.json());
        }
    }
};

export default StocksApi;