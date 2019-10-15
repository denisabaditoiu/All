var person = {
    name: 'Popescu',
    surname: 'Gigel'
};

person.toString = function() {
    return `${this.name} ${this.surname}`;
}

console.log(person.toString());

var student = Object.create(person);
student.grupa = 1099;
console.log(student);

var employee = Object.create(student);
employee.salary = 5000;
employee.applyBonus = function() {
    return this.salary + 1000;
}
console.log(employee.applyBonus());
console.log(person);
console.log(employee);
console.log(student);



