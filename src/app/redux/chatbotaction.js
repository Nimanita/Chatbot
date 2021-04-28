const ANSWERSUBMIT = 'ANSWERSUBMIT'

function answersubmit(x)
{
    return{
        type : ANSWERSUBMIT,
        value : x
    }
}
const list = [];
const Anssubmit = (tempanswer) =>{

   

    list.push(tempanswer);
    
    return function(dispatch){
        dispatch(answersubmit(list))
    }




}
export default Anssubmit;