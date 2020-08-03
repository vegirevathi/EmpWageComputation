console.log("Welcome to employee wage computation");

let EMP_RATE_PER_HOUR = 20;
let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;

let empHrs = 0;
let empWage = 0;

let empCheck = Math.floor(Math.random() * 10) % 3;
if (empCheck == IS_PART_TIME)
{
	console.log("Employee is Present");
	empHrs = 8;
}
else if (empCheck == IS_FULL_TIME)
{
	console.log("Employee is Part Time Present");
	empHrs = 4;
}
else
{
	console.log("Employee is Absent");
	empHrs = 0;
}
empWage = empHrs * EMP_RATE_PER_HOUR;
console.log("Employee wage is " +empWage);
