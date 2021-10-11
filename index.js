
let message = "";
let player;
let house;

let messageEl = document.getElementById('message-el');

let playerEl = document.getElementById("player-el")
let playerSumEl = document.getElementById("player-sum-el");
let playerCardsEl = document.getElementById("player-cards-el");

let houseSumEl = document.getElementById("house-sum-el");
let houseCardsEl = document.getElementById("house-cards-el");

let startBtn = document.getElementById('start-btn');
let newCardBtn = document.getElementById('new-card-btn');
let newGameBtn = document.getElementById('new-game-btn');

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

function startGame(){
    constructPlayers();
    player.isAlive = true;
    house.isAlive = true;
    house.sum = house.cards[0] + house.cards[1];
    player.sum = player.cards[0] + player.cards[1];
    // isAlive = true;
    // let firstCard = getRandomCard();
    // let secondCard = getRandomCard();
    // player.cards = [firstCard, secondCard];
    // house.cards = [firstCard, secondCard];
    house.sum = house.firstCard + house.secondCard;
    // playerSum = player.firstCard + player.secondCard;
   renderGame();

    // toggleDisplay();

}


function constructPlayers(){
    player = new Person(getRandomCard(), getRandomCard());
    player.cards = [player.firstCard, player.secondCard]
    player.name = "Robin"
    player.chips = 333;
    
    house = new Person(getRandomCard(), getRandomCard());
    house.cards = [house.firstCard, house.secondCard]
}

function renderHouse(){
    let displayHouseCards = house.cards.map(c => houseCardsEl.textContent = " " + c);
    houseCardsEl.textContent = "Cards: " + displayHouseCards;
    houseSumEl.textContent = "Sum: " + house.sum;
}

function renderPlayer(){
    let displayPlayerCards = player.cards.map(c => playerCardsEl.textContent = " " + c);
    playerCardsEl.textContent = "Cards: " + displayPlayerCards;
    playerSumEl.textContent = "Sum: " + player.sum;
    if ( player.sum < 21 && house.sum < 21) {
        message = "Do you want to draw a new card?";
      } else if (player.sum === 21) {
        message = "Blackjack!"; 
        player.hasBlackJack = true;
        house.isAlive = false;
      } else if (house.sum > 21) {
        message = "House bust! You win!"; 
        player.hasBlackJack = true; 
        house.isAlive = false;
      } else {
        message = "You Lose!";
        player.isAlive = false
      }
      messageEl.textContent = message;
}


function renderGame(){
    renderHouse();
    renderPlayer();
    playerEl.textContent = player.name + ": $" + player.chips
}



function getRandomCard(){
    let rand = Math.floor(Math.random() * 13) + 1;
    if(rand === 1) {
        return 11
    } else if(rand > 10){
        return 10
    } else return rand;
}

function newCard(){
    if(player.isAlive && player.hasBlackJack === false){
        let playerCard = getRandomCard();
        player.cards.push(playerCard);
        player.sum += playerCard;

        let houseCard = getRandomCard();
        house.cards.push(houseCard);
        house.sum += houseCard;

        renderGame();
    } 
}



// function toggleDisplay(){

//     switch(isAlive){
//         case player.isAlive === true && house.isAlive === true:
//             startBtn.textContent.display = 'none'
//             newCardBtn.textContent.display = 'block'
//             newGameBtn.textContent.display = 'none'
//             break;
//         case player.isAlive === true && house.isAlive === false:
//             startBtn.textContent.display = 'none'
//             newCardBtn.textContent.display = 'none'
//             newGameBtn.textContent.display = 'block'
//             message = "House is over! You win!"
//             break;
//         case house.isAlive === true && player.isAlive === false:
//             startBtn.textContent.display = 'none'
//             newCardBtn.textContent.display = 'none'
//             newGameBtn.textContent.display = 'block'
//             message = "Bust! You Lose!"
//     }

//     // if(player.isAlive && house.isAlive){
//     //     startBtn.textContent.display = 'none'
//     //     newCardBtn.textContent.display = 'block'
//     //     newGameBtn.textContent.display = 'none'
//     // } else {
//     //     restartBtn.textContent.style.display = 'block'
//     //     gameBtns[0].textContent.style.display = 'none'
//     //     gameBtns[1].textContent.style.display = 'none'
//     // }
// }
