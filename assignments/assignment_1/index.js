
const FIRST_NAME = "Densa";
const LAST_NAME = "Baditoiu";
const GRUPA = "1074";

/**
 * Make the implementation here
 */
function numberParser(value) {
     if(isFinite(value)  && (value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER) )
   {
       return parseInt(value); 
   }
   else
   {
       return NaN;
   }  
}

module.exports = {
    FIRST_NAME,
    LAST_NAME,
    GRUPA,
    numberParser
}

