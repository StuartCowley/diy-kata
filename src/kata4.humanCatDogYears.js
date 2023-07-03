const humanCatDogYears = (humanYears) => {;
    let catYears, dogYears;

    if (humanYears === 1) {
      catYears = 15;
      dogYears = 15;
    } 

    else if (humanYears === 2) {
      catYears = 24;
      dogYears = 24;
    } 

    else {
      catYears = 24 + (humanYears +4);
      dogYears += 5 + (humanYears +4);
    }
    
    return [humanYears, catYears, dogYears];
};

module.exports = humanCatDogYears
