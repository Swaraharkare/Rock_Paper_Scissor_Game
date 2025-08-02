let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscoreid = document.querySelector("#user-score");
let compscoreid = document.querySelector("#comp-score");

const getCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}

const playgame=(userchoice)=>{
     console.log("userchoice was",userchoice );
    //  generate computer choice
    const compChoice =getCompChoice();
    console.log("comp choice",compChoice)
    // if(userchoice===compChoice){
    //     msg.innerText="Game is draw";
    // }else 
    if(userchoice==="rock"&&compChoice==="scissor"||userchoice==="paper"&&compChoice==="rock"||userchoice==="scissor"&&compChoice==="paper"){
        userscoreid.innerText=++userscore;
        msg.innerText="You won game !";
        msg.style.background="#038c35";
     }
     else if(userchoice==="scissor"&&compChoice==="rock"||userchoice==="rock"&&compChoice==="paper"||userchoice==="paper"&&compChoice==="scissor"){
        compscoreid.innerText=++compscore;
         msg.innerText="Computer won game !";
        msg.style.background="#cc8006";
     }else{
         msg.innerText="Game is draw";
          msg.style.background="red";
     }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
        
    })
})