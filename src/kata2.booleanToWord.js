const booleanToWord = (boolean) => {
//    if (boolean === true) {
//        return 'Yes';
//    } else {
//        return 'No';
//    } 
return boolean ? 'Yes' : 'No';
};

// refactored code using ternary operator ?

module.exports = booleanToWord;
