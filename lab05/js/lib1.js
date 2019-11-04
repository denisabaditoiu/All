var LIB1 = window.LIB1 || {};
var LIB2 = window.LIB2;
(function() {
    LIB1.getDetails = function(name) {
        return `Hello ${name}`;
    }
    window.addEventListener('load', () => {
        console.log(LIB1.getDetails('Gigel'));    
        console.log(LIB2.getDetails('Gigel')); 
    })
    console.log(LIB1.getDetails('Gigel'));
}());
