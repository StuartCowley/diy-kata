function reachDestination (distance, speed) {
        const time = (distance / speed);
        const roundedTime = Math.ceil(time*2) /2;
         return roundedTime.toFixed(1);
        };

module.exports = reachDestination
