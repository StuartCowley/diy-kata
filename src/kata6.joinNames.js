const joinNames = (namesObj) => {
    const namesArray = namesObj.map(obj=>obj.name)
    const lastName = namesArray.pop()
    return namesObj.length>1? `${namesArray.join(', ')} & ${lastName}`:namesObj[0].name
};
    
module.exports = joinNames;
