let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

startGame = () => renderGame();

function renderGame(){
    let displayCards = cards.map(c => cardsEl.textContent = " " + c);
    cardsEl.textContent = "Cards: " + displayCards;
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
    let card = 3;
    sum += card;
    cards.push(card);
    renderGame();
}