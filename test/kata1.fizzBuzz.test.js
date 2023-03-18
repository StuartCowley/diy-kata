const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
    expect(fizzBuzz(9)).toEqual("Fizz");
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });

  test("returns Whizz when passed a multiple of 7", () => {
    expect(fizzBuzz(14)).toEqual("Whizz");
  });

  test("returns FizzWhizz when passed a multiple of 3 and 7", () => {
    expect(fizzBuzz(21)).toEqual("FizzWhizz");
  });

  test("returns FizzBuzzWhizz when passed a multiple of 3,5 and 7", () => {
    expect(fizzBuzz(105)).toEqual("FizzBuzzWhizz");
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
    expect(fizzBuzz(30)).toEqual("FizzBuzz");
  });

  test("returns the number 4 when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(4)).toEqual(4);
    expect(fizzBuzz(8)).toEqual(8);
  });
});
