function closure() {
    var func = null; 
    for(var i=0; i < 3; i++){
        func = function() {
            console.log(i);
        };
    }
    return func;
}

function closure1() {
    var func = null; 
    for(let i=0; i < 3; i++){
        func = function() {
            console.log(i);
        };
    }
    return func;
}

function func1(a, b) {
    return a + b;
}

function func2(a, b) {
    return (a || 0) + (b || 0);
}

function func3(a = 0, b = 0) {
    return a + b;
}

console.log(func1(5, 4));
console.log(func2(5));
console.log(func2());
console.log(func3());
console.log(closure().prototype);
console.log(closure1().prototype);
