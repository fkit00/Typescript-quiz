import React, {useState} from 'react';
import QuestionCard from './components/QuestionsCard';
import { fetchQuizQuestions } from './API';

// types

import { QuestionState, Difficulty } from './API';

type AnswerObject={
question:string,
answer: string,
correct:boolean, 
correctAnswer:string,
}

const TOTAL_QUESTIONS=10;

function App() {

const [loading, setLoading] = useState(false)
const [questions, setQuestions] = useState<QuestionState[]>([])
const [number, setNumber] = useState(0)
const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
const [score, setScore] = useState(0)
const [gameOver, setGameOver] = useState(true)

console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))


async function startTriva(){

}

 function checkAnswer(e: React.MouseEvent<HTMLButtonElement>){
  
}

function nextQuestion(){

}

  return (
    <div className="App">
 <h1>React Quiz</h1>
 <button className='start' onClick={startTriva}> Start </button>
    <p className='score'>Score:</p>
    <p >Loading Questions ...</p>
    {/* <QuestionCard
    questionNo={number+1} totalQuestions={TOTAL_QUESTIONS} question={questions[number].question} answers={questions[number].answers} userAnswer={userAnswers ? userAnswers[number] : undefined} callback={checkAnswer}/> */}
    <button className='next' onClick={nextQuestion}> Next question</button>
    </div>
  );
}

export default App;
