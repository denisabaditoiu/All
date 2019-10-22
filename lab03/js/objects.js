function Student(name, surname) {
    this.name = name;
    this.surname = surname;
}

console.log(Student.prototype);

Student.prototype.getStudentDetails = function() {
    return this.name + ' ' + this.surname;
}

Student.prototype.factory = function(college) {
    function signIn() {
        return `${this.name} ${this.surname} started the college ${college}`;
    }
    function graduate() {
        return `${this.name} ${this.surname} graduated the college ${college}`;
    }
            return {
                signIn: signIn,
                graduate: graduate
            }
}

Student.prototype.factoryThis = function(college) {
    var self = this;
    function signIn() {
        return `${self.name} ${self.surname} started the college ${college}`;
    }
    function graduate() {
        return `${self.name} ${self.surname} graduated the college ${college}`;
    }
    return {
        signIn,
        graduate
    }
}

var student = new Student('Cosmin', 'Cartas');
console.log(student.getStudentDetails());
console.log(student.factory('ASE').signIn());
console.log(student.factoryThis('ASE').signIn());


function Employee(name, surname, salary) {
    Student.call(this, name, surname);
    this.salary = salary;
}

Employee.prototype = Object.create(Student.prototype);

const employee1 = new Employee('Cocos', 'Da', 1000);

console.log(Employee.prototype.constructor);
Object.defineProperty(Employee.prototype, 'constructor', {
    value: Employee,
    enumerable: false,
    writable: true
});

