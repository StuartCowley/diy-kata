const reachDestination = (distance, speed) => {
	const duration = distance / speed;
	const arrivalTime = Math.round(duration / 0.5) * 0.5;
	return `I should be there in ${arrivalTime} hours.`;
};

module.exports = reachDestination;
