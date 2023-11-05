const humanCatDogYears = (number) => {
    const ageArray = [number]
    if (number===1){
        ageArray.push(15,15)
    }
    else if (number===2){
        ageArray.push(24,24)
    }
    else if (number>2) {
        ageArray.push(24+4*(number-2))
        ageArray.push(24+5*(number-2))
    }
    else {
        ageArray.push(0,0)
    }
    return ageArray
}; 
module.exports = humanCatDogYears;

