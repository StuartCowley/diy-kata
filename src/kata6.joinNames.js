const joinNames = (namesObj) => {

  let namesArray= namesObj.map(item=>item.name)
  
  const namesString=namesArray.reduce((acc,curr,index)=>{
   // const index = namesObj.findIndex((element)=>element===curr)
    if(index!==namesObj.length-1){
      return `${acc}, ${curr}`
    }else{
      return `${acc} & ${curr}`
    }
    
    });
    return namesString;
  };


  // const lastName=nameArray.pop();

 // const sentence =  nameArray.reduce((acc,curr)=>{
   //   const index = namesObj.findIndex((element)=>element===curr)
     // return const lastValue = `& ${lastName}`
      //if (index!==nameArray.length-1){
        // return `${acc}, ${curr}`
     // }
      //return sentence + lastValue;




 //const newObj = namesObj.map((object)=>object.name).reduce((acc,curr)=>{
 // const index = namesObj.findIndex((element)=>element===curr)
   //const lastObj=newObj.pop()
   //return `${acc} , ${curr} & ${lastObj}`
  // + last object
     
     

    
    
    //.reduce((acc,curr)=>{
    // if(index!==namesObj.length-1){
      //  return `${acc} ${curr}`
///}else{
      //    return `${acc} & ${curr}`
    //   }
    //})
//}




module.exports = joinNames;
