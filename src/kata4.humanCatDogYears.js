const humanCatDogYears = (number) => {
    const catYears=24+((number-2)*4);
    const dogYears=24+((number-2)*5);
    return [number,catYears,dogYears];

};

module.exports = humanCatDogYears;
