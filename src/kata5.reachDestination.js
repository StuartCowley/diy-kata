const reachDestination = (distance, speed) => {
  const roundUp = Math.ceil((distance / speed) * 2) / 2;

  console.log(roundUp);

  return `I should be there in ${roundUp} hours.`;
};

module.exports = reachDestination;
