

export type Question ={
category: string, 
correct_answer: string,
difficulty: string,
incorrect_answer: string[],
question: string, 
type:string;

}

export enum Difficulty{
    EASY ="easy",
    MEDIUM="medium", 
    HARD="hard"
}

export type QuestionState = Question & { answers: string[]}

export async function fetchQuizQuestions(amount:number, difficulty:Difficulty){
    const endpoint=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(endpoint)).json()
    console.log(data)

return data.results.map((question: Question)=>({
    ...question, 
    answer: 
}))
}