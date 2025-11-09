/// <reference path ="./Subject.ts"/>

namespace Subjects {
	export interface Teacher {
		experienceTeachingJava?: number;
	}
	export class Java extends Subject {
		getRequirement(): String {
			return "Here is the list of requirements for Java";
		}

		getAvailableTeacher(): string {
			if (
				!this.teacher.experienceTeachingJava ||
				this.teacher.experienceTeachingJava <= 0
			) {
				return "No available Teacher";
			} else {
				return `Available Teacher: ${this.teacher.firstName}`;
			}
		}
	}
}
