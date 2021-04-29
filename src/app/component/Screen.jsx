import React from 'react';
import { useState } from 'react';
import './screen.css';
import Question from './Question';
import {useSelector , useDispatch } from 'react-redux';
import Anssubmit from '../redux/chatbotaction';
function Screen(){

    const dispatch = useDispatch()
    const [counter, setcounter] = useState(1);
    const [tempv , changetempv] = useState(" ");
function handleChange(e)
{
    changetempv(e.target.value);
    
    
}
function handleClick()
{
    var v1 = document.getElementById("Inputfield").value.length;
    var v2 =  document.getElementById("Inputfield").value;
    //console.log("v1",v1 , v2);
   if(v1  === 0 || v2 === "Please write something!!!")
   {
      // console.log("null");
      document.getElementById("Inputfield").value = "Please write something!!!";
      changetempv("Please write something!!!");
   }
   else
   { 
        setcounter(counter+1);
   // console.log("clicked",tempv);
    document.getElementById("Inputfield").value = '';
    
    dispatch(Anssubmit(tempv));
    changetempv(" ");
   }
}
    return(
        <div class="container mainscreen">
             
       <div class="justify-content-center screen">
        <h1 class="title">Chatbot</h1>
           <Question counter = {counter}/>
           <div class="Inputtext">
         
          <input  id = "Inputfield"  class=" sticky-bottom message" onChange={handleChange} ></input>
          
          <button type="button" class="btn btn-primary" onClick={handleClick}>Send</button>
         
          </div>
       </div>
       </div>
    );
}
export default Screen;