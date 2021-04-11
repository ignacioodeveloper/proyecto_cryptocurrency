

// coins: BTC-ETH-MATIC
// api https://api.gdax.com/products/BTC-USD/book
// bitcoin price

var bitcoinPrecioActual = new XMLHttpRequest();

bitcoinPrecioActual.open('GET', 'https://api.gdax.com/products/BTC-USD/book', true);

bitcoinPrecioActual.onreadystatechange = function(){
    if(bitcoinPrecioActual.readyState == 4) {
        var ticker =JSON.parse(bitcoinPrecioActual.responseText);
        var precioCompra = ticker.bids[0][0];
        var precioVenta = ticker.asks[0][0];
        document.getElementById('bitcoinCompra').innerHTML = '$' + precioCompra;
        document.getElementById('bitcoinVenta').innerHTML = '$' + precioVenta;
    };
};

bitcoinPrecioActual.send();