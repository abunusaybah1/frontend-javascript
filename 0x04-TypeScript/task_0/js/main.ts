interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentOne: Student = {
	firstName: "Abdul",
	lastName: "Ismail",
	age: 12,
	location: "Lagos",
};

const studentTwo: Student = {
	firstName: "Yusuf",
	lastName: "Luqman",
	age: 18,
	location: "Oyo",
};

let studentsList: Student[] = [studentOne, studentTwo];

// Render a table using vanilla JS
function renderStudentsTable(list: Student[]): void {
	const table = document.createElement("table");
	table.setAttribute("border", "1");
	table.style.borderCollapse = "collapse";
	const thead = document.createElement("thead");
	const headerRow = document.createElement("tr");
	["First Name", "Location"].forEach((h) => {
		const th = document.createElement("th");
		th.textContent = h;
		th.style.padding = "8px";
		headerRow.appendChild(th);
	});
	thead.appendChild(headerRow);
	table.appendChild(thead);

	const tbody = document.createElement("tbody");
	list.forEach((s) => {
		const tr = document.createElement("tr");
		const tdName = document.createElement("td");
		tdName.textContent = s.firstName;
		tdName.style.padding = "8px";
		const tdLoc = document.createElement("td");
		tdLoc.textContent = s.location;
		tdLoc.style.padding = "8px";
		tr.appendChild(tdName);
		tr.appendChild(tdLoc);
		tbody.appendChild(tr);
	});
	table.appendChild(tbody);

	// Append to body or to a container if exists
	const container = document.getElementById("root") ?? document.body;
	container.appendChild(table);
}

renderStudentsTable(studentsList);

export {}; // keep file a module
