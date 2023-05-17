export function shuffleArray(array:any[]){
[...array].sort(()=>Math.random()-0.5)
}

//spreading array first 
// then shufflling it through math.random