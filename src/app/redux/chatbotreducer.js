
const ANSWERSUBMIT = 'ANSWERSUBMIT'
const initialState = {
 ans : []
}


const chatbotreducer = (state = initialState,action)=>{
 

switch(action.type){
  case ANSWERSUBMIT : return{
     
    ans: action.value
     
    
  }
  
  
  default : return state
}

}
export default chatbotreducer