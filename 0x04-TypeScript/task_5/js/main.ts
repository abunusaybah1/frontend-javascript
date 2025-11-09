interface MajorCredits {
	credit: number;
	brand: "Major";
}

interface MinorCredits {
	credit: number;
	brand: "Minor";
}

function sumMajorCredits(subject1: MajorCredits, Subject2: MajorCredits) {
	return subject1.credit + Subject2.credit;
}

function sumMinorCredits(subject1: MinorCredits, Subject2: MinorCredits) {
	return subject1.credit + Subject2.credit;
}
