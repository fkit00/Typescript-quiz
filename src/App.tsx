import React from 'react';
import QuestionCard from './components/QuestionsCard';

function App() {

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
