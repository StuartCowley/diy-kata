const numberToReversedDigits = (number) => {
    const array = number.toString().split('').reverse()
    const array2 = []
    for (let i=0; i<array.length; i++){
        array2.push(Number(array[i]))
    }
    return array2
};

module.exports = numberToReversedDigits;

