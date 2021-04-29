import React from 'react';
import { useState } from 'react';
import {useSelector , useDispatch } from 'react-redux';
import './screen.css';
 
   
function Answer(props){

  
  const answer = useSelector(state=>state.ans);
 
if(props.id>0)
{
  
  return(

     <div class="container">
       <div class="row justify-content-end ">
       <div class="main-answer">
     <h1>{answer[props.id - 1]}</h1></div>
     </div>
     </div>
   );
  }
return(<h1></h1>);
 
}
export default Answer;