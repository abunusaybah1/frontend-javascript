interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: string | number | undefined | boolean;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

// export {};
