// eslint-disable-next-line arrow-body-style
const reachDestination = (distance, speed) => {
  const expectedArrival = Math.ceil((distance / speed) * 2) / 2;
  return `I should be there in ${expectedArrival} hours.`;
};

module.exports = reachDestination;
