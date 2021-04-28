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
       <div class="screen">
           <Question counter = {counter}/>
           <div class="Inputtext">
           <h1>Chatbot</h1>
          <input  id = "Inputfield"  class="message" onChange={handleChange} ></input>
          <button onClick={handleClick}>Send</button>
          </div>
       </div>
    );
}
export default Screen;