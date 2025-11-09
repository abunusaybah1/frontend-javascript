const Cpp = new Subjects.Cpp();
const React = new Subjects.React();
const Java = new Subjects.Java();

export const cpp = new Subjects.Cpp();
export const react = new Subjects.React();
export const java = new Subjects.Java();

export const cTeacher: Subjects.Teacher = {
	firstName: "John",
	lastName: "Doe",
	experienceTeachingC: 10,
};

console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("React");
React.setTeacher(cTeacher);
console.log(React.getRequirements());
console.log(React.getAvailableTeacher());

console.log("Java");
Java.setTeacher(cTeacher);
console.log(Java.getRequirements());
console.log(Java.getAvailableTeacher());
