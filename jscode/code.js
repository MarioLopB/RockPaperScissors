const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const roundLB = document.getElementById("round");
const pointPlayer = document.getElementById("point-player");
const pointIA = document.getElementById("point-ia");
const info = document.getElementById("info");
const menuBtn = document.getElementById("menu-btn");
const resetBtn = document.getElementById("reset-btn");

let round = 1;
let pointsP = 0;
let pointsIA = 0;

menuBtn.style.display='none';
resetBtn.style.display='none';

let playRound = (playerSelection) => {
    let computerSelection = getComputerChoice();

    if ((playerSelection == "rock" && computerSelection == "paper")
        || (playerSelection == "paper" && computerSelection == "scissors")
        || (playerSelection == "scissors" && computerSelection == "rock")) {
        pointsIA++;
        return 0;
    } else if ((playerSelection == "paper" && computerSelection == "rock")
        || (playerSelection == "scissors" && computerSelection == "paper")
        || (playerSelection == "rock" && computerSelection == "scissors")) {
        pointsP++;
        return 1;
    } else {
        return 2;
    }
}

let playGame = (playerSelection) => {

    if (round != 5) {
        round++;

        let choice = playRound(playerSelection);

        switch (choice) {
            case 0:
                pointIA.textContent = "Puntos IA: " + pointsIA;
                info.textContent = "IA gana la ronda";
                break;
            case 1:
                pointPlayer.textContent = "Puntos Jugador: " + pointsP;
                info.textContent = "Jugador gana la ronda";
                break;
            case 2:
                info.textContent = "Ronda empada"
        }

        roundLB.textContent = "Ronda " + round;
    } else if (round == 5){
        if(pointsP > pointsIA){
            roundLB.textContent = "¡HAS GANADO!";
        } else if(pointsP < pointsIA){
            roundLB.textContent = "Has perdio :(";
        } else{
            roundLB.textContent = "EMPATE";
        }

        menuBtn.style.display='block';
        resetBtn.style.display='block';
    }
}

let getComputerChoice = () => {
    let option = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let choice;

    switch (option) {
        case 1:
            choice = "rock"
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }

    return choice;
}

rockBtn.addEventListener('click', (event) => {
    playGame("rock");
});

paperBtn.addEventListener('click', (event) => {
    playGame("paper");
});

scissorsBtn.addEventListener('click', (event) => {
    playGame("scissors");
});