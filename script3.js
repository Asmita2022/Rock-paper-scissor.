let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".images");
const msg = document.querySelector(".pick"); 
const uscore = document.querySelector(".number1");
const cscore = document.querySelector(".number");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Draw Game");
    msg.innerText = `Draw Game!Play again`;
    msg.style.backgroundColor = "rgb(18, 18, 64)";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        uscore.innerText = userScore;
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        cscore.innerText = compScore;
        msg.innerText = `You lose!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((images) => {
    images.addEventListener("click" , () => {
        const userChoice = images.getAttribute("id");
        playGame(userChoice);
    });
});