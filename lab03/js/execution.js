var myVar = 5;

function a(){
    var myVar = 7
    b();
}

function b(){
    var myVar = 3;
    console.log(myVar)
}

function c(){
    var myVar = 9;
    function d() {
        console.log(myVar)
    }
    d()
}

a();
console.log(myVar);
c()