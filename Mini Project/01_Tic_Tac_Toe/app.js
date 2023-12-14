const buttons = document.querySelectorAll(".box"); // Select .box not .game
const resetButton = document.querySelector("#reset-btn");
const winnerMsg = document.querySelector("#msg");
const newButton =  document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

function resetGame(){
    turnO = true;
    count = 0;
    enableButton();
    msgContainer.classList.add("hide"); 
}

resetButton.addEventListener('click', () => {
    turnO = true;
    enableButton();
    msgContainer.classList.add("hide");
});

function enableButton(){
    buttons.forEach((button)=>{
        button.disabled = false;
        button.innerText = '';
    })
}

function disableButton(){
    buttons.forEach((button)=>{
        button.disabled = true;
    })
}
// Checking winner
function checkWinner(){
    for(let pattern of winPatterns){ // pattern has each pattern
       let pos1 =  buttons[pattern[0]].innerText;
       let pos2 =  buttons[pattern[1]].innerText;
       let pos3 =  buttons[pattern[2]].innerText;
       if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3 ){
            winnerMsg.innerText = `Congratulation. ${pos1} is winner.`;
            msgContainer.classList.remove("hide"); // msg container will be visible now.
            disableButton();
        }
        else {
            if(count === 9){ // game is draw when all boxes are filled
                winnerMsg.innerText = "Game is draw.";
                msgContainer.classList.remove("hide");
            }
        }
       }
    }
}
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        count++
        if (turnO) {
            button.innerText = 'O';
            button.style.color = "black"
            button.disabled = true;
        } else {
            button.innerText = 'X';
            button.style.color = "yellow"
            button.disabled = true;
        }
        turnO = !turnO; // Toggle the value of turnO for the next click.
        checkWinner();  // Checking winner
    });
});

newButton.addEventListener('click', resetGame);
resetButton.addEventListener('click', resetGame);