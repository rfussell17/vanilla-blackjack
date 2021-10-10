class Person {
    constructor(firstCard, secondCard){
        this.firstCard = firstCard,
        this.secondCard = secondCard
    }
}

let player = new Person(getRandomCard(), getRandomCard());
player.cards = [player.firstCard, player.secondCard]
player.name = "Robin"
player.chips = 333;

let house = new Person(getRandomCard(), getRandomCard());
house.cards = [house.firstCard, house.secondCard]

// let cards = [];
let houseSum = 0;
let playerSum
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById('message-el');

let playerEl = document.getElementById("player-el")
let playerSumEl = document.getElementById("player-sum-el");
let playerCardsEl = document.getElementById("player-cards-el");

let houseEl = document.getElementById("house-el")
let HouseSumEl = document.getElementById("house-sum-el");
let HouseCardsEl = document.getElementById("house-cards-el");

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let rand = Math.floor(Math.random() * 13) + 1;
    if(rand === 1) {
        return 11
    } else if(rand > 10){
        return 10
    } else return rand;
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    player.cards = [firstCard, secondCard];
    house.cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderHouse(){

}

function renderPlayer(){

}


function renderGame(){
    let displayHouseCards = house.cards.map(c => cardsEl.textContent = " " + c);
    houseCardsEl.textContent = "Cards: " + displayHouseCards;
    houseSumEl.textContent = "Sum: " + houseSum;
    if ( houseSum < 21) {
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
        player.cards.push(card);
        house.cards.push(card);
        renderGame();
    } 
}