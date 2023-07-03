const numberToReversedDigits = (number) => {
    const digits = String(number).split('');
    const reversedDigits = digits.reverse();
    return reversedDigits.map(digit => Number(digit));
    
  
  const reversed = numberToReversedDigits(12345);
  console.log(reversed);
};

module.exports = numberToReversedDigits;
