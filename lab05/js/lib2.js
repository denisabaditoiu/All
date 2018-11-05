/*
PHASE 1: Unexpected method call

function getDetails(product='Your product', productPrice='Your price'){
    return `${product} ${productPrice}`;
}

console.log(getDetails('name', 'haha'));
*/

var LIB2_NS = window.LIB2_NS || {};

(function(){
    LIB2_NS.getDetails = function(product, qty){
    return `Produs:${product} Nr.Bucati:${qty}`;
    }
}());

console.log(LIB2_NS.getDetails('PERE', 20));

