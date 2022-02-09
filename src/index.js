import React from 'react';
import ReactDOM from 'react-dom';

// import App from "./App";
// import Heading  from "./Heading";
 // import "./style.css";
  import { add, sub, mult , div  } from "./Add";
  

  ReactDOM.render(
    <>
    <ul>
    <li>sum of Two Number:{ add(10,20) }</li>
    <li> subtract of two Number:{ sub( 20,10)}</li>
    <li>multilpication of Two Numbers :{ 
    mult(10,10) }</li>
    <li>Division of Two Number:{ div(10,3)}</li>

    </ul>
    
    </>, 
    document.getElementById("root")


  );





 
  


  




  
      
      
