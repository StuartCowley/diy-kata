const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears",()=>{
    it("converts human years to cat and dog years",()=>{
        expect(humanCatDogYears(10)).toEqual([10,56,64]);
        expect(humanCatDogYears(15)).toEqual([15,76,89]);
        expect(humanCatDogYears(17)).toEqual([17,84,99]);
        expect(humanCatDogYears(23)).toEqual([23,108,129]);

    })

})