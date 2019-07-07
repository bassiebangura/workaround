//WorkAround is a human resources program that 
//returns basic information about an employee, 
//based on salary data.

function getEmployeeInformation(inputSalary) {
    salary = inputSalary;
    console.log('Cadre: ' + getCadre());
    console.log('Tax: ' + calculateTax());
    console.log('Benefits: ' + getBenefits());
    console.log('Bonus: ' + calculateBonus());
    console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
  }
  
  getEmployeeInformation(10000);
  getEmployeeInformation(50000);
  getEmployeeInformation(100000);