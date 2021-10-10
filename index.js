let card = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Robin",
    chips: 125
}

function getRandomCard(){
    let rand = Math.floor(Math.random() * 13) + 1;
    if(rand === 1) {
        return 11
    } else if(rand > 10){
        return 10
    } else return rand;
}

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

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
    if(isAlive && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    } 
}