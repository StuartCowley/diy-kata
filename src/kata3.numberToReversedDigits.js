const numberToReversedDigits = (number) => {

const arrayOfDigits = Array.from(String(number), Number);
console.log(arrayOfDigits);

return arrayOfDigits.reverse();

};

module.exports = numberToReversedDigits;
