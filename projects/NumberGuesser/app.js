let min, max, winningNum, guessesLeft;

// variables
const guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    messageEle = document.querySelector('.message');

main();

function main() {
    reloadGame();
    loadEventListeners();
}

function reloadGame() {
    min = 1;
    max = 10;
    winningNum = getRandomNum(min, max);
    guessesLeft = 3;
    minNum.textContent = min;
    maxNum.textContent = max;

    if (guessBtn.classList.contains('play-again')) {
        guessBtn.classList.remove('play-again');
        guessBtn.value = 'submit';

        guessInput.disabled = false;
        guessInput.value = '';
        guessInput.style.borderColor = 'black';

        messageEle.textContent = '';
    }
}

function loadEventListeners() {
    guessBtn.addEventListener('click', onClickListener);
}

function onClickListener(e) {

    if (guessBtn.classList.contains('play-again')) {
        reloadGame();
        return;
    }

    let guessValue = parseInt(guessInput.value);

    if (isNaN(guessValue) || guessValue < min || guessValue > max) {
        showError(`Enter an integer between ${min} and ${max}`);
        return;
    }

    if (guessValue === winningNum) {
        gameOver(true, 'You win!')
        return;
    }

    guessesLeft -= 1;
    if (guessesLeft <= 0) {
        gameOver(false, `Game over. The correct answer was ${winningNum}`)
        return;
    }

    if (guessValue < winningNum) {
        min = guessValue;
        setMessage(`Higher. ${guessesLeft} guesses left.`, 'orange');
    }
    else {
        max = guessValue;
        setMessage(`Lower. ${guessesLeft} guesses left.`, 'orange');
    }
    guessInput.value = '';
    guessInput.style.borderColor = 'orange';
    minNum.textContent = min;
    maxNum.textContent = max;
}

function gameOver(userWon, msg) {
    let color = userWon ? 'green' : 'red';
    guessInput.disabled = true;
    setMessage(msg, color);
    guessInput.style.borderColor = color;

    guessBtn.value = 'Play Again?';
    guessBtn.classList.add('play-again');
}

function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function showError(message) {

    if (document.querySelector('.alert') !== null) {
        return;
    }

    let errorDiv = document.createElement('div');

    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(message));

    const card = document.querySelector('.card');
    const cardHeading = document.querySelector('.card .heading');

    card.insertBefore(errorDiv, cardHeading);

    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}

function setMessage(message, color) {
    messageEle.textContent = message;
    messageEle.style.color = color;
}