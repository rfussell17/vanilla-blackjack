let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let newCard = 3;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

startGame = () => renderGame();

function renderGame(){
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
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

function newCard(){
    console.log("draw new card");
    let card = 3;
    sum += card;
    startGame();
}