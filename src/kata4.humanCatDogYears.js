const humanCatDogYears = (number) => {
	const human = number;
	let cat = 0;
	let dog = 0;
	const oldAge = number - 2;
	if (number === 0) {
		cat = 0;
		dog = 0;
	} else if (number === 1) {
		cat = 15;
		dog = 15;
	} else if (number === 2) {
		cat = 24;
		dog = 24;
	} else if (number > 2) {
		cat = oldAge * 4 + 24;
		dog = oldAge * 5 + 24;
	}
	return [human, cat, dog];
};

module.exports = humanCatDogYears;
