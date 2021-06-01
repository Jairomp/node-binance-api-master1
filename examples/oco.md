( async () => {
  const Binance = require('node-binance-api');
  const binance = new Binance({
    APIKEY: '89iSv0ux71rJiGwFNc2Q9isVMMKcPXekPx4p0QSvlSxZErVA0tePvjUSbOPnFRjf',
    APISECRET: 'RGMdkREx7gue14xnYyQfqXzRr4kckA0KPrhaeoyuKVNMlKYxKhkI43RDZPCI1ght'
  });
  
  // OCO Order
  binance.order('SELL', 'BNBBTC', 1, 0.0029, { type:'OCO' , stopLimitPrice: 0.001, stopPrice: 0.001 }, (error, response) => {})

  // Alternative Syntax
  binance.sell('BNBBTC', 1, 0.0029, { type:'OCO' , stopLimitPrice: 0.001, stopPrice: 0.001 }, (error, response) => {})
  
} )();
