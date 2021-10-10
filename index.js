let firstCard = 13;
let secondCard = 8;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame(){
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if ( sum < 21) {
        message = "Do you want to draw a new card?";
      } else if (sum === 21) {
        message = "Blackjack!"; 
        hasBlackJack = true;
      } else {
        message = "You Lose!";
        isAlive = false
      }
      messageEl.textContent = message;
}