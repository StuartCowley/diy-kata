const booleanToWord = (boolean) => {
    return (boolean.toLowerCase()==='yes')? true: (boolean.toLowerCase==='no')? false:undefined;
};
 
module.exports = booleanToWord;

