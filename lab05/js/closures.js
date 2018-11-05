function func1(){
    var temp = 7;
    return function(){
        console.log(temp);
    }
}

var value = func1();
value();

function employeeFactory(employeeType){
    return function(name){
        switch(employeeType){
            case 'manager':
                return `${name} is a ${employeeType}`;
                break;
            case 'intern':
                return `${name} is a young ${employeeType}`;
                break;
        }
    }
}

var manager = employeeFactory('manager');
var intern = employeeFactory('intern');
console.log(manager('Gigel'))
console.log(intern('Popel'));