let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
const massage=document.querySelector("#massage");
let UserScore=document.querySelector("#user-score");
let CompScore=document.querySelector("#computer-score");

let getCompChoice=()=>{
    let Options=["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    return Options[idx];
}
let drawgame=()=>{
    massage.innerText="Game draw 😕";
    massage.style.backgroundColor=" rgb(112, 238, 44)";
    
}
const ShowWinner=(userWin)=>{
   if(userWin){
    userScore++;
    UserScore.innerText= userScore;
    massage.innerText="You win 😊";
    massage.style.backgroundColor="Green";
    
   }else{
       compScore++;
    CompScore.innerText=compScore;
    massage.innerText="You lose 😔";
    massage.style.backgroundColor="Red";
    
   }
}

let myGame=(userChoice)=>{
    const compChoice=getCompChoice();
   
    if(userChoice==compChoice){
    //game draw
    drawgame();
   }else{
    let userWin=true;
    if(userChoice==="rock"){
        // scissor or paper
        userWin= compChoice==="paper" ? false : true; 
    }else if(userChoice==="paper"){
        //rock or scissor
       userWin= compChoice==="scissor" ? false : true;
    }else{
        userWin=compChoice==="rock" ? false : true;
    }
    ShowWinner(userWin);
   }
}


choices.forEach((choice)=>{
    choice.addEventListener(("click"),()=>{
        let userChoice=choice.getAttribute("id");
        myGame(userChoice);
    })
});
