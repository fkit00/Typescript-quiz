import { AnswerObject } from "../App"

import { Wrapper, ButtonWrapper } from "./QuestionCard.styles" 

type Props ={
    question: string, 
    answers : string[],
    callback: (e:React.MouseEvent<HTMLButtonElement>) => void, //not returning anything
    userAnswer: AnswerObject | undefined, 
    questionNo: number, 
    totalQuestions: number
}
function QuestionCard({question,answers,userAnswer,callback,questionNo,totalQuestions}:Props){

return(


    <Wrapper> 
        <p className='number'>{questionNo}/{totalQuestions}</p>
        <p dangerouslySetInnerHTML={{__html:question}}></p>
        <div>
     {answers.map((answer)=>(
       
        <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
            <button disabled={userAnswer ? true :false } value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}}/>
        </button>
        
        </ButtonWrapper>
    ))} 
        </div>
    </Wrapper>
)


}

export default QuestionCard