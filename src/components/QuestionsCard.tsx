import { AnswerObject } from "../App"

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


    <div> 
        <p className='number'>{questionNo}/{totalQuestions}</p>
        <p dangerouslySetInnerHTML={{__html:question}}></p>
        <div>
     {answers.map((answer)=>(
       
        <div key={answer}>
            <button disabled={userAnswer ? true :false } value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}}/>
        </button>
        
        </div>
    ))} 
        </div>
    </div>
)


}

export default QuestionCard