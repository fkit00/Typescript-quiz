import React, {useState} from 'react';
import QuestionCard from './components/QuestionsCard';

function App() {

const [loading, setLoading] = useState(false)
const [questions, setQuestions] = useState([])
const [number, setNumber] = useState(0)
const [userAnswers, setUserAnswers] = useState([])
const [score, setScore] = useState(0)
const [gameOver, setGameOver] = useState(true)


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
    <QuestionCard/>
    <button className='next' onClick={nextQuestion}> Next question</button>
    </div>
  );
}

export default App;
