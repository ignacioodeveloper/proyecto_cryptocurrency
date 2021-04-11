

// coins: BTC-ETH-MATIC
// api https://api.gdax.com/products/BTC-USD/book
// bitcoin price

var bitcoinPrecioActual = new XMLHttpRequest();

bitcoinPrecioActual.open('GET', 'https://api.gdax.com/products/BTC-USD/book', true);

bitcoinPrecioActual.onreadystatechange = function(){
    if(bitcoinPrecioActual.readyState == 4) {
        var ticker =JSON.parse(bitcoinPrecioActual.responseText);
        var btcPrecioCompra = ticker.bids[0][0];
        var btcPrecioVenta = ticker.asks[0][0];
        document.getElementById('btcCompra').innerHTML = '$' + btcPrecioCompra;
        document.getElementById('btcVenta').innerHTML = '$' + btcPrecioVenta;
    };
};

bitcoinPrecioActual.send();


var ethereumPrecioActual = new XMLHttpRequest();

ethereumPrecioActual.open('GET','https://api.gdax.com/products/ETH-USD/book', true);

ethereumPrecioActual.onreadystatechange = function(){
    if(ethereumPrecioActual.readyState == 4) {
        var ticker =JSON.parse(ethereumPrecioActual.responseText);
        var ethPrecioCompra = ticker.bids[0][0];
        var ethPrecioVenta = ticker.asks[0][0];
        document.getElementById('ethCompra').innerHTML = '$' + ethPrecioCompra;
        document.getElementById('ethVenta').innerHTML = '$' + ethPrecioVenta;
    };
}; 

ethereumPrecioActual.send();