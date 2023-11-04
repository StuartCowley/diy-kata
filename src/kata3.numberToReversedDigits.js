function numberToReversedDigits(number) {
const array = number.split("");
const numArray = array.map((element) => Number(element))
return numArray.reverse()
}



module.exports = numberToReversedDigits;
