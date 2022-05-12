 const fizzbuzz = (numero) => {

  if(numero % 15 == 0){
    return "FizzBuzz";
  }

   else if(numero % 3 == 0){
    return "Fizz";
   } 

   else if(numero % 5 == 0){
    return "Buzz";
   }
   else return numero;
    
  }
 
  module.exports = fizzbuzz;