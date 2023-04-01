'use strict';

const firstPlayerEl = document.getElementById(`player--0`);
const secondPlayerEl = document.getElementById(`player--1`);

const firstPlayerOverallScoreEl = document.getElementById('overall_score--0');
const secondPlayerOverallScoreEl = document.getElementById('overall_score--1');
const firstPlayerCurrentScoreEl = document.getElementById('current_score--0');
const secondPlayerCurrentScoreEl = document.getElementById('current_score--1');

const addCurrScoreEl1 = document.getElementById('add_curr_score--0');
const addCurrScoreEl2 = document.getElementById('add_curr_score--1');

const shooterEl = document.querySelector('.shooter_container');
const laserEl = document.querySelector('.laser');

const restartBtn = document.querySelector('.restart_btn');

const popupsList = document.querySelectorAll('.popup');

// Application data:
let overallScores = [0, 0],
    activePlayerCurrScore = 0,
    activePlayer = 0,
    gameOver = false;

const gameWinScore = 10,
    invalidScores = [1, 5, 10];

// Utility functions:

const generateRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min) + 1;

const handlePopup = (randomNum, className) => {
    popupsList[popupsList.length - randomNum].classList.add(className);
};

const handlePopupReset = () => {
    for (let i = 0; i < popupsList.length; i++) {
        popupsList[i].classList.remove('shakeAnimate', 'translateAbove', 'translateBelow');
    }
};

const handleLaserWidth = width => {
    laserEl.style.width = `${width}px`;
};

const init = function () {
    firstPlayerCurrentScoreEl.textContent =
        secondPlayerCurrentScoreEl.textContent =
        firstPlayerOverallScoreEl.textContent =
        secondPlayerOverallScoreEl.textContent =
            '0';

    // After the restart button is clicked:
    overallScores = [0, 0];
    activePlayerCurrScore = 0;
    activePlayer = 0;

    handleLaserWidth(0);

    firstPlayerEl.classList.add('player--active');
    secondPlayerEl.classList.remove('player--active');

    addCurrScoreEl1.classList.remove('isDisabled');
    addCurrScoreEl2.classList.add('isDisabled');

    // To restart the game after a player wins:
    gameOver = false;
    shooterEl.classList.remove('isDisabled');
    firstPlayerEl.classList.remove('winner', 'loser');
    secondPlayerEl.classList.remove('winner', 'loser');
    restartBtn.classList.remove('animateUpdown');
};

const switchPlayers = function () {
    document.getElementById(`current_score--${activePlayer}`).textContent = 0;

    /* document.getElementById(`player--${activePlayer}`).classList.remove('player--active');
        document.getElementById(`player--${activePlayer === 0 ? 1 : 0}`).classList.add('player--active'); */

    firstPlayerEl.classList.toggle('player--active');
    secondPlayerEl.classList.toggle('player--active');

    addCurrScoreEl1.classList.toggle('isDisabled');
    addCurrScoreEl2.classList.toggle('isDisabled');

    activePlayer = activePlayer === 0 ? 1 : 0;

    activePlayerCurrScore = 0;
};

const handleGameWin = () => {
    gameOver = true;

    shooterEl.classList.add('isDisabled');
    restartBtn.classList.add('animateUpdown');

    document.getElementById(`player--${activePlayer}`).classList.add('winner');
    document.getElementById(`player--${activePlayer === 0 ? 1 : 0}`).classList.add('loser');
};

init();

shooterEl.addEventListener('click', function () {
    const randomlyGeneratedNum = generateRandomNumber(0, 10);
    handleLaserWidth(randomlyGeneratedNum * 100);

    handlePopupReset();

    if (invalidScores.includes(randomlyGeneratedNum)) {
        switchPlayers();
        handlePopup(randomlyGeneratedNum, 'shakeAnimate');
    } else {
        activePlayerCurrScore += randomlyGeneratedNum; // Data change.
        document.getElementById(`current_score--${activePlayer}`).textContent = activePlayerCurrScore; // UI change.
        /* if (activePlayer === 0) {
            popupsList[popupsList.length - randomlyGeneratedNum].classList.add('translateAbove');
        } else {
            popupsList[popupsList.length - randomlyGeneratedNum].classList.add('translateBelow');
        } */

        /* if (activePlayer === 0) {
            handlePopup(randomlyGeneratedNum, 'translateAbove');
        } else {
            handlePopup(randomlyGeneratedNum, 'translateBelow');
        } */

        handlePopup(randomlyGeneratedNum, activePlayer === 0 ? 'translateAbove' : 'translateBelow');
    }
});

const addToOverallScore = () => {
    if (gameOver) return;

    overallScores[activePlayer] += activePlayerCurrScore;
    document.getElementById(`overall_score--${activePlayer}`).textContent = overallScores[activePlayer]; // UI change.

    handlePopupReset();
    handleLaserWidth(0);

    if (overallScores[activePlayer] >= gameWinScore) {
        handleGameWin();
    } else {
        switchPlayers();
    }
};

addCurrScoreEl1.addEventListener('click', addToOverallScore);
addCurrScoreEl2.addEventListener('click', addToOverallScore);

restartBtn.addEventListener('click', init);
