const booleanToWord = (boolean) => {
	const sayYes = (boolean.toString = () => "yes");
	const sayNo = (boolean.toString = () => "no");

	if (boolean == false) {
		return sayNo;
	} else {
		return sayYes;
	}
};

module.exports = booleanToWord;
