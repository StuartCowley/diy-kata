const reachDestination = (distance, speed) => {
  const exactTime = distance / speed;
  const num = Math.ceil(exactTime * 2) / 2;
  return `I should be there in ${num} hours`;
};
module.exports = reachDestination;
