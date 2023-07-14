const reachDestination = (distance, speed) => {
    
    const time = distance/speed;
    const rounded= Math.round(time);
    const roundUP=(rounded+0.5);
    const roundDown=(rounded-0.5);


    if (time === rounded){
        return `I should be there in ${time} hours.`;
    }
    if (time===(rounded+0.5)){
        return `I should be there in ${time} hours.`;
    }

    if (time>=(rounded+0.26) && time<=(rounded+0.49)){
        return `I should be there in ${roundUP} hours.`
        //roundUP
        //works
    }

    if(time>=((rounded-1)+0.51) && time<=((rounded-1)+0.74)){
      return `I should be there in ${roundDown} hours.`
      //roundDown
    }

    if(time>=((rounded-1)+0.75) && time<=((rounded-1)+0.999)){
        return `I should be there in ${rounded} hours.`
        //rounded
    }
     

     if(time>=(rounded+0.01) && time<=(rounded+0.25)){
     return `I should be there in ${rounded} hours.`
     //rounded
     //works
     }


};

module.exports = reachDestination;
