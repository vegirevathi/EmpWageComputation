console.log("Welcome to employee wage computation");

let NUM_OF_WORKING_DAYS = 20;
let EMP_RATE_PER_HOUR = 20;
let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;

let empHrs = 0;
let empWage = 0;
let totalEmpWage = 0;

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
	let empCheck = Math.floor(Math.random() * 10) % 3;
	switch (empCheck) {
		case IS_PART_TIME:
			console.log("Employee is Part Time Present for day" +day);
			empHrs = 4;
			break;
		case IS_FULL_TIME:
			console.log("Employee is Full Time Present for day" +day);
			empHrs = 8;
			break;
		default:
			console.log("Employee is Absent for day" +day);
			empHrs = 0;
	}
	empWage = empHrs * EMP_RATE_PER_HOUR;
	totalEmpWage += empWage;
	console.log("Employee wage is " +totalEmpWage);
}
