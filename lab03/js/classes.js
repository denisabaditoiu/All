class Student {
    constructor(name, surname, group) {
        this._name = name;
        this._surname = surname;
        this._group = group;
    }

    set name(value) {
        this._name = value;
    }

    get name(){
        return this._name;
    }

    set surname(value) {
        this._surname = surname;
    }
    get surname() {
        return this._surname;
    }

    set group(value) {
        this._group = value;
    }

    get group() {
        return this._group;
    }

    doSomething1() {
        console.log(this);
        function callMe() {
            console.log(this);
        }
        callMe.bind(this)();
    }

    doSomething = () => {
        console.log(this);
    }
}

class Employee extends Student {
    constructor(name, surname, group, salary) {
        super(name, surname, group);
        this.salary = salary;
    }
}

let student = new Student('Gigel', 'Popel', 2000);
let employee = new Employee('Gigi', 'Behehe', 2001, 5000);
let employee1 = new Employee('Gigi', 'Behehe', 2001, 5200);
let employee2 = new Employee('Gigi', 'Behehe', 2001, 5500);
employee.doSomething1();
student.doSomething1();

const employees = [];
employees.push(employee);
employees.push(employee1);
employees.push(employee2);


console.log(employees.map((employee) => employee.salary));
console.log(employees.filter((employee) => employee.salary > 5000));
console.log(employees.reduce((total, employee) => total += employee.salary, 0));
