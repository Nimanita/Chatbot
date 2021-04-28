import React from 'react';
import { useState } from 'react';
import {useSelector , useDispatch } from 'react-redux';
import Answer from './Answer';
function Subject(props){
 // console.log("subject")
  if(props.id === 1)
  {
     return(<div>
      <h1>English</h1>
      <p>Those looking to study English will most likely enjoy both independent and group study, 
        but you can expect majority of time spent gaining your English degree to be undertaken solo,
         as much of the course will require you to commit to long periods of reading and research outside of class.</p>
     </div>);
  }
  else if(props.id === 2)
  {
     return(<div>
      <h1>Math</h1>
      <p>Relying upon math experts and enthusiasts to define the subject is likely 
        to lead to a variety of conflicting and wide-ranging answers. Let’s be safe, then, 
        and call upon dictionary solutions to
         this question. Most non-specialist dictionaries define mathematics by 
         summarizing the main mathematics topic</p>
     </div>);
  }
  else if(props.id === 3)
  {
     return(<div>
      <h1>Science</h1>
      <p>Science is a multi-disciplined academic field for students with the following 
        subject combinations in class 12th – PCM (Physics, Chemistry, Mathematics), PCB (Physics, Chemistry, Biology),
         and PCMB (Physics, Chemistry, Mathematics, Biology). Students looking forward to a career in Science have a wide range of options at both UG (undergraduate) and PG (postgraduate) levels. Students can choose to pursue courses such as BSc (Bachelor of Science),
         MSc (Master of Science) and PhD (Doctor of Philosophy) 
         in a variety of Science branches/ specialisations such as</p>
     </div>);
  }
  return(
    <h1></h1>
  );
}

function Questiontreatment(props)
{
  const answer = useSelector(state=>state.ans);
  //console.log("question answer" , answer);
  var anscounter = props.counter-1;
  const question =[
    {id : 1, q : "Hi My name is Admin Bot.Here to help you with your questions"},
    {id : 2, q : "What is your name?"},
    {id : 3, q : "Hello"},
    
    {id : 4, q : "What is your child's name ?"},
    {id : 5, q : "Date of birth of  "},
    {id : 6, q : "Which school is"},
    
    {id : 7, q : "Which program are you looking for?"}
 

  
];
const [subjectid , changeid] = useState(0);
function Englishclicked()
{
    //console.log("english");
    changeid(1);
    
}
function Mathclicked()
{
    //console.log("MAth");
    changeid(2);
}
function Scienceclicked()
{
   // console.log("eScience");
    changeid(3);
}
  const id = props.id;
  if(id === 3)
  {
     return(
       <h1>{question[id-1].q} {answer[id-2]},How are you today?</h1>

     );
  }
  else if(id === 5)
  {
    return(
      <h1>{question[id-1].q} {answer[id-2]} is ...</h1>

    );
  }
  else if(id === 6)
  {
    return(
      <h1>{question[id-1].q} {answer[id-3]} in ?</h1>

    );
  }
  else if(id === 7)
  {
    return(
      <div>
      <h1>{question[id-1].q}</h1>
      <div class="row">
        <div class="col-lg-3">
          <button onClick={()=>Englishclicked()}>English</button>
        </div>
        <div class="col-lg-3">
          <button onClick={()=>Mathclicked()}>Math</button>
        </div>
        <div class="col-lg-3">
          <button onClick={()=>Scienceclicked()}>Science</button>
        </div>
      </div>
      <Subject id = {subjectid}/>
      </div>
    );
  }
  return(
  
    <h1>{question[id-1].q}</h1>
  );

}
   
function Question(props){

 
  const question =[
    {id : 1, q : "Hi My name is Admin Bot.Here to help you with your questions"},
    {id : 2, q : "What is your name?"},
    {id : 3, q : "Hello"},
    
    {id : 4, q : "What is your child's name ?"},
    {id : 5, q : "Date of birth of  "},
    {id : 6, q : "Which school is"},
    
    {id : 7, q : "Which program are you looking for?"}
 

   

    
  ];
  const answer = useSelector(state=>state.ans);
  
  var anscounter = props.counter-1;
  return(

     <div class="question">
     
      {question.filter(x => 
    x.id <= props.counter).map(y => (
   <div>
     <Questiontreatment q = {y.q} id = {y.id}/>

    <Answer id = {y.id}/>
    </div>
    ))}
    </div>
   );
  
 
}
export default Question;