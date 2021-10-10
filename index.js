class Person {
    constructor(firstCard, secondCard){
        this.firstCard = firstCard,
        this.secondCard = secondCard
    }

    isAlive = false;
    sum = 0
    hasBlackJack = false;
    cards = [this.firstCard, this.secondCard]
}

let player = new Person(getRandomCard(), getRandomCard());
player.cards = [player.firstCard, player.secondCard]
player.name = "Robin"
player.chips = 333;

let house = new Person(getRandomCard(), getRandomCard());
house.cards = [house.firstCard, house.secondCard]

// let cards = [];
// let houseSum = 0;
// let playerSum
// let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById('message-el');

let playerEl = document.getElementById("player-el")
let playerSumEl = document.getElementById("player-sum-el");
let playerCardsEl = document.getElementById("player-cards-el");

let houseEl = document.getElementById("house-el")
let houseSumEl = document.getElementById("house-sum-el");
let houseCardsEl = document.getElementById("house-cards-el");

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
    player.isAlive = true;
    house.isAlive = true;
    houseSum = house.cards[0] + house.cards[1];
    playerSum = player.cards[0] + player.cards[1];
    // isAlive = true;
    // let firstCard = getRandomCard();
    // let secondCard = getRandomCard();
    // player.cards = [firstCard, secondCard];
    // house.cards = [firstCard, secondCard];
    // houseSum = house.firstCard + house.secondCard;
    // playerSum = player.firstCard + player.secondCard;

    renderGame();
}

function renderHouse(){
    let displayHouseCards = house.cards.map(c => houseCardsEl.textContent = " " + c);
    houseCardsEl.textContent = "Cards: " + displayHouseCards;
    houseSumEl.textContent = "Sum: " + houseSum;
}

function renderPlayer(){
    let displayPlayerCards = player.cards.map(c => playerCardsEl.textContent = " " + c);
    playerCardsEl.textContent = "Cards: " + displayPlayerCards;
    playerSumEl.textContent = "Sum: " + playerSum;
    if ( playerSum < 21) {
        message = "Do you want to draw a new card?";
      } else if (playerSum === 21) {
        message = "Blackjack!"; 
        player.hasBlackJack = true;
      } else {
        message = "You Lose!";
        player.isAlive = false
      }
      messageEl.textContent = message;
}


function renderGame(){
  
    renderPlayer();
    renderHouse();

}

function newCard(){
    if(player.isAlive && player.hasBlackJack === false){
        let playerCard = getRandomCard();
        let houseCard = getRandomCard();
        playerSum += playerCard;
        houseSum += houseCard;
        player.cards.push(playerCard);
        house.cards.push(houseCard);
        renderGame();
    } 
}