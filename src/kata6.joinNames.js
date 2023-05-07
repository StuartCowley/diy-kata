const joinNames = (namesObj) => {
	// transfer names into an array

	let nameArray = ["Bart", "Lisa", "Maggie"];

	//good from here down!
	let lastName = nameArray.pop();
	let nameString = nameArray.join(", ");

	return `${nameString} & ${lastName}`;
};

module.exports = joinNames;
