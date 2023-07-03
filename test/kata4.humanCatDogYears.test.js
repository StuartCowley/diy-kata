const { humanCatDogYears } = require("../src");

describe ('should return an array of three numbers', () => {
it ('should return an array of three numbers when passed one number', () => { 
    expect (humanCatDogYears(1)).toBe [15, 24, 28];
    expect (humanCatDogYears(10)).toBe [10, 56, 64];
})
});
