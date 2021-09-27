'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const curScore0 = document.getElementById('current--0');
const curScore1 = document.getElementById('current--1');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const diceShow = document.querySelector('.dice');
const activePlayer1 = document.querySelector('.player--0')
const activePlayer2 = document.querySelector('.player--1')

let actvPlayer1 = activePlayer1.classList.contains('player--active')
let actvPlayer2 = activePlayer2.classList.contains('player--active')
let currentScore = 0;

btnNewGame.addEventListener('click',function(){
    score0El.textContent=0
    score1El.textContent=0
    curScore0.textContent=0
    curScore1.textContent=0
    diceShow.classList.add('hidden')
 })

btnRollDice.addEventListener('click',function(){

    const dice = Math.trunc(Math.random()*6)+1;
    actvPlayer1 = activePlayer1.classList.contains('player--active')
    actvPlayer2 = activePlayer2.classList.contains('player--active')
    
    console.log(actvPlayer1,actvPlayer2);

    if(dice !== 1 && actvPlayer1 ){ //if player 1 is active
        currentScore += dice;
        diceShow.classList.remove('hidden');
        diceShow.src = `dice-${dice}.png`;
        curScore0.textContent = currentScore
    }
    else if(dice !== 1 && actvPlayer2 ){ //if player 2 is active
        currentScore += dice;
        diceShow.classList.remove('hidden');
        diceShow.src = `dice-${dice}.png`;
        curScore1.textContent = currentScore
    }
    else if(dice === 1){
        currentScore = 0;
        diceShow.src = `dice-${dice}.png`;
        
        if(actvPlayer1){
            curScore0.textContent = currentScore
            activePlayer1.classList.remove('player--active')
            activePlayer2.classList.add('player--active')
        }
        else if(actvPlayer2){
            curScore1.textContent = currentScore
            activePlayer2.classList.remove('player--active')
            activePlayer1.classList.add('player--active')
        }
    }
});    

btnHold.addEventListener('click',function(){
    console.log(545);
    
    
    if(actvPlayer1){
        score0El.textContent = Number(score0El.textContent) + currentScore
        curScore0.textContent=0
        activePlayer1.classList.remove('player--active')
        activePlayer2.classList.add('player--active')
    }
    else if(actvPlayer2){
        score1El.textContent = Number(score1El.textContent) + currentScore
        curScore1.textContent=0
        activePlayer2.classList.remove('player--active')
        activePlayer1.classList.add('player--active')
    }
    //check winner
    if (Number(score0El.textContent) >=20 ){
        alert('player 1 win!!!');
    }
    else if (Number(score1El.textContent) >=20 ){
        alert('player 2 win!!!');
    }
    currentScore = 0;
})




