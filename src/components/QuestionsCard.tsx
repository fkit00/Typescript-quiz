import React from 'react'


type Props ={
    question: string, 
    answers : string[],
    callback: any, 
    userAnswer: boolean, 
    questionNo: number, 
    totalQuestions: number
}
function QuestionCard({question,answers,userAnswer,callback,questionNo,totalQuestions}:Props){

return(

    <div> 
        <p className='number'>{questionNo}/{totalQuestions}</p>
        <p dangerouslySetInnerHTML={{__html:question}}></p>
        <div>
    {answers.map(answer=>(
        <div>
            <button disabled={userAnswer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}}/>
        </button>
        
        </div>
    ))}
        </div>
    </div>
)


}

export default QuestionCard