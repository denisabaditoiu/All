
const FIRST_NAME = "Denisa";
const LAST_NAME = "Baditoiu";
const GRUPA = "1074";

/**
 * Make the implementation here
 */
class Employee {
       constructor(name, surname, salary) {
       this.name = name;
       this.surname = surname;
       this.salary = salary;
   }
   
   getDetails(){
       return this.name + ' ' + this.surname + ' ' + this.salary;	
   }
}

class SoftwareEngineer extends Employee{
   
       constructor(name, surname, salary ,experience) {
      super(name, surname, salary);
      if(experience != undefined)
      {
          this.experience=experience;
      }
      else{
          this.experience = 'JUNIOR';
      }
    }  
    
    applyBonus() {
      if(this.experience == 'JUNIOR')
      {
          return this.salary*1.1;
      }
      else{
          if(this.experience == 'MIDDLE')
      {
          return this.salary*1.15;
      }
      else{
          if(this.experience == 'SENIOR')
      {
          return this.salary*1.2;
      }
      else {
          return this.salary*1.1;
      }
      }
      }      
}
   
}

module.exports = {
    FIRST_NAME,
    LAST_NAME,
    GRUPA,
    Employee,
    SoftwareEngineer
}

