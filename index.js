let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard(){
    let rand = Math.floor(Math.random() * 13) + 1;
    if(rand === 1) {
        return 11
    } else if(rand > 10){
        return 10
    } else return rand;
}

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
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
}