const reachDestination = (distance, speed) => {
  const travelTime = Math.ceil((distance / speed) * 2) / 2;

  return `I should be there in ${travelTime} hours.`;
};

module.exports = reachDestination;
