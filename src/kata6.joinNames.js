const joinNames = (namesObj) => {
	const nameArray = namesObj.map(function (x) {
		return x.name;
	});
	if (nameArray.length === 1) {
		return nameArray[0];
	}
	let lastName = nameArray.pop();
	let nameString = nameArray.join(", ");

	return `${nameString} & ${lastName}`;
};

module.exports = joinNames;
