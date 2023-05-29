const reachDestination = (distance, speed) => {
    const time = distance / speed;
    const roundedTime = Math.round(time * 2) / 2;
    return `I should be there in ${roundedTime.toFixed(1)} hours`;
  };
  
  module.exports = reachDestination;