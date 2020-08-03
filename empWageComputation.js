console.log("Welcome to employee wage computation");

let EMP_RATE_PER_HOUR = 20;

let empHrs = 0;
let empWage = 0;
let isPresent = 1;

let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == isPresent)
{
	console.log("Employee is Present");
	empHrs = 8;
}
else
{
	console.log("Employee is Absent");
	empHrs = 0;
}
empWage = empHrs * EMP_RATE_PER_HOUR;
console.log("Employee wage is" +empWage);
