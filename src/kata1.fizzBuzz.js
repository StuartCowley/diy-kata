const fizzBuzz = (number) => {
    return (number%3===0 && number%5!=0)? 'Fizz': (number%3!=0 && number%5===0)? 'Buzz': (number%3===0 && number%5===0)? 'FizzBuzz': number
};

module.exports = fizzBuzz;

