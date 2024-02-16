let userS =0;
let compS =0;

let choices = document.querySelectorAll(".choice");
let userscore = document.querySelector("#user");
let compscore = document.querySelector("#comp");
let mes = document.querySelector("#msg");

function showwinner(userwin , userchoice , compchoice){
  if (userwin){
   userS++;
    userscore.innerText = userS;
    mes.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
   
  } 
  else {
    compS++
    compscore.innerText = compS;
    mes.innerText = `You Lose!${compchoice} beats your ${userchoice} `;
    
  }
}

function getcompchoice(){
    let options = ["rock","papper", "scissor"];
    let rand_num = Math.floor(Math.random()*3);
    return options[rand_num];
}

function draw(){
    alert("Game is Draw")
}

function playgame(userchoice){
    
    let compchoice = getcompchoice();
   
   
    if(userchoice===compchoice){
        draw();
    }
    else{
        let userwin = true;

        if(userchoice ==="rock"){
           userwin = compchoice=== "paper" ? false : true;
        }
        else if (userchoice === "papper"){
            userwin = compchoice === "scissor" ? false:true;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin ,userchoice, compchoice);
    }
    
    

};

choices.forEach(fun);
function fun(choice){
    
    choice.addEventListener("click",clicked);
    let userchoice= choice.getAttribute("id");
    function clicked(){
       playgame(userchoice);
    }
}