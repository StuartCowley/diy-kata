const fizzBuzz = (number) => {
  if (number % 3 != 0 && number % 5 != 0) {
    return number;
  }

  let res = "";
  if (number % 3 === 0) {
    res += "Fizz";
  }
  if (number % 5 === 0) {
    res += "Buzz";
  }
  return res;
};

module.exports = fizzBuzz;