/**
 * Static Typing vs Dynamic Typing 
 * Primitive Types: Something that is not an object
 * undefined - a variable that don't have a value
 * null - similar to undefined but it's in user scope
 * Boolean - true or false
 * Number
 * String
 * Symbol
*/
var isVariable = undefined; //Never use this! Let the engine use the undefined type;
console.log(`isVariable = ${isVariable}`);
isVariable = null; //This is the user specific 'undefined' type
console.log(`isVariable = ${isVariable}`);
isVariable = true;
console.log(`isVariable = ${isVariable}`);
isVariable = 10;
console.log(`isVariable = ${isVariable}`);
isVariable = 'Some string';
console.log(`isVariable = ${isVariable}`);


/**
 * Coercion - converting a variable from a type to another 
*/ 

var a = 1 + 3;
console.log(a); //a is a Number
a = 1 + '3';
console.log(a); //a is a String
a = 1 + true;
console.log(a); //a is a Number
a = 1 + undefined;
console.log(a) // Not a Number
a = 1 + null;
console.log(a) // a is a Number