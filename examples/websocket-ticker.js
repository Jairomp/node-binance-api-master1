const Binance = require( 'node-binance-api' );
const binance = new Binance();
global.ticker = {};

//var lista =''; GET/SET
// Show contents of BNBUSDT ticker object once per second
setInterval( () => {
    if ( !global.ticker.BNBUSDT ) return;
    console.log( global.ticker.ALPHABTC);
    console.log( `BTC ask: ${global.ticker.ALPHABTC.bestAsk} bid: ${global.ticker.ALPHABTC.bestBid}` );
}, 5000 );

// Get 24h price change statistics for all symbols
binance.websockets.prevDay( false, function ( error, obj ) {
    global.ticker[obj.symbol] = obj;
});
