var LIB2 = window.LIB2 || {};
var LIB1 = window.LIB1;
(function() {
    LIB2.getDetails = function(name) {
        return `You have selected the following product: ${name}`;
    }
    
    console.log(LIB2.getDetails('Iphone'));
    console.log(LIB1.getDetails('Iphone'));
}());
