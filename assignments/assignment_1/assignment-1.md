# Create a function that checks if an input is numeric type and return it as an integer value.
## Function should pass the following requirements: 
- ### return the integer part of a number (example: numberParser(57) should return 57, numberParser(56.3) should return 56);
- ### return the integer part of a string that can be coerced to number (example: numberParser('56.3') should return 56);
- ### Treat the case where the input is NaN (take care NaN !== NaN) (numberParser(NaN) should return NaN);
- ### Treat the case where the input is Infinity and -Infinity (numberParser(Infinity) should return NaN);
- ### If the input is higher or lower than the Number.MAX_INTEGER_VALUE & Number.MIN_INTEGER_VALUE the function should return NaN

# Instructions 
- ## Install [NodeLTS](https://nodejs.org/en/)
- ## Run npm install in the root directory;
- ## Evaluate yourself by using `npm test` command;