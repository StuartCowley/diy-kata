const reachDestination = (distance, speed) => {
  const eta = distance / speed;
  console.log(eta);

  const roundUp = Math.round(eta / 0.5) * 0.5;
  //console.log(roundSt(eta, 0.5));
  console.log(roundUp);

  return "I should be there in " + roundUp + " hours.";
};

/* function roundSt(value, step) {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
} */
module.exports = reachDestination;
