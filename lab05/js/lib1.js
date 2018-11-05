// Namespace: container for functions and vars
/*
PHASE 1: Unexpected method call

function getDetails(name, surname){
    return `${name} ${surname}`;
}

window.addEventListener('load', () => {
   console.log(getDetails()); 
});
*/

var LIB1_NS = window.LIB1_NS || {};

(function(){
   LIB1_NS.getDetails = function(name, surname){
       return `Nume:${name} Prenume:${surname}`;
   } 
}());

console.log(LIB1_NS.getDetails('Gigescu', 'Popel'));