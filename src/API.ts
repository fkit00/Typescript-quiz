
import { shuffleArray } from "./utils";



export type Question ={
category: string, 
correct_answer: string,
difficulty: string,
incorrect_answers: string[],
question: string, 
type:string;

}

export enum Difficulty{
    EASY ="easy",
    MEDIUM="medium", 
    HARD="hard"
}

export type QuestionState = Question & { answers: string[]}
//problems not here - by god i wish it

export async function fetchQuizQuestions(amount:number, difficulty:Difficulty){
    const endpoint=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(endpoint)).json()

    return data.results.map((question: Question) => ({
         console.log(`I'm in the map {question}`)
        }))

    };


    // my eslint is being a dick