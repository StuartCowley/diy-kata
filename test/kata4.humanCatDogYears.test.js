const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears", ()=>{
    test("returns array of human, cat and dog years when passed human years", ()=>{
        expect(humanCatDogYears(10)).toEqual([10, 56, 64])    
    });
    test("returns array of human, cat and dog years when passed human years", ()=>{
        expect(humanCatDogYears(1)).toEqual([1, 15, 15])    
    });
    test("returns array of human, cat and dog years when passed human years", ()=>{
        expect(humanCatDogYears(2)).toEqual([2, 24, 24])    
    });
    test("returns array of human, cat and dog years when passed human years", ()=>{
        expect(humanCatDogYears(0)).toEqual([0, 0, 0])    
    });
})
