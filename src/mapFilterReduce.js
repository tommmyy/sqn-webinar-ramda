// See http://ramdajs.org
// for map, filter, reduce
//
// # Task
const employees = [
	{ id: 1, age: 41, salary: 40000 },
	{ id: 2, age: 33, salary: 33000 },
	{ id: 3, age: 53, salary: 53000 },
	{ id: 4, age: 28, salary: 28000 },
	{ id: 5, age: 26, salary: 26000 },
];

let sumSalary = 0;
for (let i = 0; i < employees.length; i++) {
	const employee = employees[i];

	if (employee.age < 40) {
		sumSalary += employee.salary;
	}
}

// 1. compose, map, filter a reduce
// 2. `prop` salary
// 3. `add`

log(sumSalary);
