function func1(){
    var temp = 7;
    return function(){
        console.log(temp);
    }
}

var value = func1();
value();

function func2(){
    var arr = [];
    for(let i = 0;i<3;i++){
        arr.push(function(){
            return i;
        });
    }
    return arr;
}

var values = func2();
console.log(values[0]());
console.log(values[1]());
console.log(values[2]());

function employeeFactory(employeeType){
    return function(name){
        switch(employeeType){
            case 'manager':
                return `${name} is a ${employeeType}`;
                break;
            case 'intern':
                return `${name} is a young ${employeeType}`;
                break;
            default:
                return `${name} is ${employeeType}`;
                break;
        }
    }
}

var manager = employeeFactory('manager');
var intern = employeeFactory('intern');
console.log(manager('Gigel'))
console.log(intern('Popel'));