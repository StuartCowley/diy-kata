const joinNames = (namesObj) => {
	const nameArray = namesObj.map(function (x) {
		return x.name;
	});
	let lastName = nameArray.pop();
	let nameString = nameArray.join(", ");

	return `${nameString} & ${lastName}`;
};

module.exports = joinNames;
