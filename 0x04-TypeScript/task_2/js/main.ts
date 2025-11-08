interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome(): string {
		return "Working from home";
	}

	getCoffeeBreak(): string {
		return " Getting a coffee break";
	}

	workDirectorTasks(): string {
		return "Getting to director tasks";
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return "Cannot work from home";
	}

	getCoffeeBreak(): string {
		return "Cannot have a break ";
	}

	workTeacherTasks(): string {
		return "Getting to work";
	}
}

function createEmployee(salary: string | number) {
	if (typeof salary === "number") {
		if (salary < 500) {
			return new Teacher();
		}
	} else {
		return new Director();
	}
}

// console.log(createEmployee(200));

console.log(createEmployee(1000));

export function isDirector(employee: Director | Teacher): employee is Director {
	return (employee as Director).workDirectorTasks !== undefined;
	// the above line checks if the method workDirectorTasks exists on the employee object and narrows the type accordingly
}

function executeWork(employee: Director | Teacher) {
	// if (employee instanceof Director) {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	} else {
		return employee.workTeacherTasks();
	}
}
