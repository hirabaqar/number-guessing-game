import inquirer from "inquirer";
const systemgenratedno=Math.floor(Math.random()*50);
// console.log(systemgenratedno);
console.log(`Welcome to NUMBER GUESS GAME Develope by HIRA BAQAR`);

const answer=await inquirer.prompt([
    {type:"number",
     name:"guessnum",
     message:"Guess the Corrcet number b/w 1 to 50"
}
])
const{guessnum}=answer
console.log(`Your Guess ,${guessnum},systemnumber ${systemgenratedno}`)
if(guessnum==systemgenratedno){
    console.log("WOW! You Guess the accurate number\n YOU  WIN")
}
else if(guessnum != systemgenratedno){
    console.log("Oops! You Guess the inaccurate number\n TRY YOUR LUCK NEXT TIME")
}
