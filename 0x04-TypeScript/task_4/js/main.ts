/// <reference path ="./subjects/Subject.ts"/>
/// <reference path ="./subjects/Cpp.ts"/>
/// <reference path ="./subjects/React.ts"/>
/// <reference path ="./subjects/Java.ts"/>
/// <reference path ="./subjects/Teacher.ts"/>


const cpp = new Cpp();
const react = new React();
const java = new Java();

// export const cpp = new Subjects.Cpp();
// export const react = new Subjects.React();
// export const java = new Subjects.Java();

export const cTeacher:Teacher = {
	firstName: "John",
	lastName: "Doe",
	experienceTeachingC: 10,
};

console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
