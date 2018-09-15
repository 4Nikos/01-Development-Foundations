class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }
  class Manager extends Employee {
      constructor(descriptionOfJob, name, salary, hireDate){
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
      }
    jobDescription(){
        console.log(this.name,"was hired on",this.hireDate, "and makes", this.salary, "because",this.name,"is",this.descriptionOfJob);
    }
  }
  class Designer extends Employee{
      constructor(experience, name, salary, hireDate){
        super(name, salary, hireDate);
        this.experience = experience;
      }
    yearsExperience(){
        console.log(this.name,"was hired on", this.hireDate,"and makes",this.salary,".",this.name,"has", this.experience, "of experience");
    }
  }
  class SalesAssociate extends Employee{
      constructor(degrees, name, salary, hireDate){
          super(name, salary, hireDate);
          this.degrees = degrees;
      }
    degreeCompleted(){
        console.log(this.name,"was hired on", this.hireDate,"after completing a", this.degrees,"degree.", this.name, "is making", this.salary, );
    }
  }
//   let employeeOne = new Employee ("David", 100000, "01/08/2000"); 
  let managerOne = new Manager("managing three departments of Sales Associates", "Steven", "150K per year", "05/09/2002");
  let designerOne = new Designer("12 years", "Andrew", "110K per year", "16/04/2006");
  let salesAssociateOne = new SalesAssociate("College", "Tom", "75K per year", "23/11/2017");
//   console.log(employeeOne);
//   console.log(managerOne);
//   console.log(designerOne);
//   console.log(salesAssociateOne);
managerOne.jobDescription();
designerOne.yearsExperience();
salesAssociateOne.degreeCompleted();