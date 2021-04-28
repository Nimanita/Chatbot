import React from 'react';
import { useState } from 'react';
import {useSelector , useDispatch } from 'react-redux';

 
   
function Answer(props){

  
  const answer = useSelector(state=>state.ans);
 
if(props.id>0)
{
  
  return(

     <div class="answer">
     <h1>{answer[props.id - 1]}</h1>
     </div>
   );
  }
return(<h1></h1>);
 
}
export default Answer;