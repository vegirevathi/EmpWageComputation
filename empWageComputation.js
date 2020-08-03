console.log("Welcome to employee wage computation");

let MAX_HRS_IN_MONTH = 100;
let NUM_OF_WORKING_DAYS = 20;
let EMP_RATE_PER_HOUR = 20;
let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;

let empHrs = 0;
let totalEmpHrs = 0;
let totalEmpWage = 0;
let totalWorkingDays = 0;

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
				 totalWorkingDays <= NUM_OF_WORKING_DAYS) {
	totalWorkingDays++;
	let empCheck = Math.floor(Math.random() * 10) % 3;
	switch (empCheck) {
		case IS_PART_TIME:
			console.log("Employee is Part Time Present for day" +totalWorkingDays);
			empHrs = 4;
			break;
		case IS_FULL_TIME:
			console.log("Employee is Full Time Present for day" +totalWorkingDays);
			empHrs = 8;
			break;
		default:
			console.log("Employee is Absent for day" +totalWorkingDays);
			empHrs = 0;
	}
	totalEmpHrs += empHrs;
}

totalEmpWage = totalEmpHrs * EMP_RATE_PER_HOUR;
console.log("Employee wage is " +totalEmpWage);

