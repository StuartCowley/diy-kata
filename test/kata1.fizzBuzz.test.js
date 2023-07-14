const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
    expect(fizzBuzz(6)).toEqual('Fizz');
    expect(fizzBuzz(9)).toEqual('Fizz');
    expect(fizzBuzz(12)).toEqual('Fizz');
  });
  
  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
    expect(fizzBuzz(10)).toEqual('Buzz');
    expect(fizzBuzz(25)).toEqual('Buzz');
    expect(fizzBuzz(20)).toEqual('Buzz');
  });
 

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz(30)).toEqual('FizzBuzz');
    expect(fizzBuzz(45)).toEqual('FizzBuzz');
    expect(fizzBuzz(60)).toEqual('FizzBuzz');
  });
 

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(34)).toEqual(34);
    expect(fizzBuzz(74)).toEqual(74);
    expect(fizzBuzz(89)).toEqual(89);
    expect(fizzBuzz(13)).toEqual(13);
  });
  
});
