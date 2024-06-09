const choices = ['piedra', 'papel', 'tijeras'];
const choiceButtons = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultMessageDisplay = document.getElementById('resultMessage');
const userScoreDisplay = document.getElementById('userScore');
const computerScoreDisplay = document.getElementById('computerScore');
const drawsDisplay = document.getElementById('draws');
const restartButton = document.getElementById('restartButton');

let userScore = 0;
let computerScore = 0;
let draws = 0;

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);
        displayChoices(userChoice, computerChoice);
        displayResult(result);
        updateScores(result);
    });
});

restartButton.addEventListener('click', resetGame);

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }
    if (
        (userChoice === 'piedra' && computerChoice === 'tijeras') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijeras' && computerChoice === 'papel')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function displayChoices(userChoice, computerChoice) {
    userChoiceDisplay.textContent = `Tu elección: ${userChoice}`;
    computerChoiceDisplay.textContent = `Elección de la computadora: ${computerChoice}`;
}

function displayResult(result) {
    if (result === 'win') {
        resultMessageDisplay.textContent = '¡Ganaste!';
    } else if (result === 'lose') {
        resultMessageDisplay.textContent = 'Perdiste!';
    } else {
        resultMessageDisplay.textContent = 'Es un empate!';
    }
}

function updateScores(result) {
    if (result === 'win') {
        userScore++;
        userScoreDisplay.textContent = `Tu puntuación: ${userScore}`;
    } else if (result === 'lose') {
        computerScore++;
        computerScoreDisplay.textContent = `Puntuación de la computadora: ${computerScore}`;
    } else {
        draws++;
        drawsDisplay.textContent = `Empates: ${draws}`;
    }
}

function resetGame() {
    userChoiceDisplay.textContent = 'Tu elección: ';
    computerChoiceDisplay.textContent = 'Elección de la computadora: ';
    resultMessageDisplay.textContent = '';
    userScore = 0;
    computerScore = 0;
    draws = 0;
    userScoreDisplay.textContent = `Tu puntuación: ${userScore}`;
    computerScoreDisplay.textContent = `Puntuación de la computadora: ${computerScore}`;
    drawsDisplay.textContent = `Empates: ${draws}`;
}
