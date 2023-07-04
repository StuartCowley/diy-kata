const numberToReversedDigits = (number) => {

        const digits= number.toString().split("").reverse();
        return digits.map((digit)=>{
            return Number(digit)
            //return digit
    })
    
        
    } 











//const newValue=number.toString().split("").reverse().join()

    
 //const newV= number.toString().split("").map((num)=>{
    //return num

    //return newV.reverse();

    

        


module.exports = numberToReversedDigits;



