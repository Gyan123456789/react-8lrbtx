

  import React from "react";
  
  function add(  num1,  num2 ) {
   let sum = num1 + num2 ; 
  return sum ;

  }
  
  function sub( a, b  ){
  let subt = a-b ; 
    return subt ;

      }

      function mult(a, b ) {
     let mult = a*b ; 
     return mult ; 

      }
      function div(a, b ) {
     let div = a/b ; 
      div = div.toFixed(2);
     return div ; 
}
     export  { add, sub , mult , div   } ;