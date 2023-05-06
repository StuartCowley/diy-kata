const numberToReversedDigits = (number) => {
	const revNum = number.toString().split("").reverse();
	const revArray = revNum.map((str) => Number(str));
	return revArray;
};
module.exports = numberToReversedDigits;
