const getEmployerRole = (employeename, employees) => {
   // const emp=employees.find(person=> person.name===employeename);
  // return emp.role;
  const employeeArray= employees.filter(person=> person.name===employeename).map((item)=>{
   return item.role;
  })
   return employeeArray.toString();
     

}





 

 // const employeeArray= employees.filter(person=> person.name===employeename).map((item)=>{
   //item.role;
   //return employeeArray.toString();
     
    



module.exports = getEmployerRole;
