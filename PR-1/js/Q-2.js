let salary = parseFloat(prompt("Enter base salary :"));
let hra = parseFloat(prompt("Enter HRA % :"));
let da = parseFloat(prompt("Enter DA % :"));
let ta = parseFloat(prompt("Enter TA % :"));

let grossSalary = salary + (salary * hra / 100) + (salary * da / 100) + (salary * ta / 100);

console.log("Gross Salary = " + grossSalary);