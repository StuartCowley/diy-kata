const reachDestination = (distance, speed) => {
const arrival = Math.ceil((distance / speed) * 2) / 2;
return `I will be there in ${arrival} hours.`;
};

module.exports = reachDestination;
