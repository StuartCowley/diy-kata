const reachDestination = (distance, speed) => {
    const time = distance/speed
    const decimal = time - Math.floor(time)
    return `I should be there in ${decimal < 0.75 && decimal > 0.25? Math.floor(time)+0.5:Math.round(time)}hours.`
};

module.exports = reachDestination;

