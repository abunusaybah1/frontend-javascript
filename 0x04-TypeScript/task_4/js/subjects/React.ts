/// <reference path ="./Subject.ts"/>

namespace Subjects {
	export interface Teacher {
		experienceTeachingReact?: number;
	}
	export class React extends Subject {
		getRequirement(): String {
			return "Here is the list of requirements for React";
		}

		getAvailableTeacher(): string {
			if (
				!this.teacher.experienceTeachingReact ||
				this.teacher.experienceTeachingReact <= 0
			) {
				return "No available Teacher";
			} else {
				return `Available Teacher: ${this.teacher.firstName}`;
			}
		}
	}
}
