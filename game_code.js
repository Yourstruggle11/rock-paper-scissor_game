const score = document.querySelector(".score");
const msg = document.querySelector(".msg");
const buttons = document.querySelectorAll("button");
let  winnerScore = [0,0];

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", playGame);
}
function playGame(e){
    msg.className = "massage";
    score.className = "scr";
    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();
    
    //lets get computer selection
    if(computerSelection < .34){
        computerSelection = "Rock";
    }
    else if(computerSelection <= .67){
        computerSelection = "Paper";
    }
    else{
        computerSelection = "Scissor";
    }

    //lets check winner
    let Result = checkWinner(playerSelection, computerSelection);
    function checkWinner(Player, Computer){
        if(Player === Computer){
            return "Draw";
        }
        if(Player === "Rock"){
            if(Computer === "Paper"){
                return "Computer";
            }
            else{
                return "Player";
            }
        }
        if(Player === "Paper"){
            if(Computer === "Scissor"){
                return "Computer";
            }
            else{
                return "Player";
            }
        }
        if(Player === "Scissor"){
            if(Computer === "Rock"){
                return "Computer";
            }
            else{
                return "Player";
            }
        }
    }
    
    //get ready what to output in
    if(Result === "Player"){
        Result += " Wins!";
        //update score
        winnerScore[0]++
    }
    if(Result === "Computer"){
        Result += " Wins!";
        //update score
        winnerScore[1]++
    }

    //out put the result
    score.innerHTML = "Player: ["+ winnerScore[0] + "] Computer: ["+ winnerScore[1] + "]" ;
    msg.innerHTML = "Player: <strong>" +playerSelection+ "</strong> Computer: <strong>" +computerSelection + "</strong> <br/>" + Result;
    
    if(winnerScore[0] == 5){
        alert("hey congo you won! the match");
    }
    if(winnerScore[1] == 5){
        alert("ops you lose");
    }

}

function refresh(){
    location. reload();
}