let message = "";
let player;
let house;

let messageEl = document.getElementById("message-el");

let playerEl = document.getElementById("player-el");
let playerSumEl = document.getElementById("player-sum-el");
let playerCardsEl = document.getElementById("player-cards-el");

let houseSumEl = document.getElementById("house-sum-el");
let houseCardsEl = document.getElementById("house-cards-el");

let startBtn = document.getElementById("start-btn");
let newCardBtn = document.getElementById("new-card-btn");
let newGameBtn = document.getElementById("new-game-btn");

class Person {
  constructor(firstCard, secondCard) {
    (this.firstCard = firstCard), (this.secondCard = secondCard);
  }
  isAlive = false;
  sum = 0;
  hasBlackJack = false;
  cards = [this.firstCard, this.secondCard];
}

function startGame() {
  constructPlayers();
  player.isAlive = true;
  house.isAlive = true;
  house.sum = house.cards[0] + house.cards[1];
  player.sum = player.cards[0] + player.cards[1];
  house.sum = house.firstCard + house.secondCard;
  renderGame();
}

function constructPlayers() {
  player = new Person(getRandomCard(), getRandomCard());
  player.cards = [player.firstCard, player.secondCard];
  player.name = "Player";
  playerEl.textContent = player.name;

  house = new Person(getRandomCard(), getRandomCard());
  house.cards = [house.firstCard, house.secondCard];
}

function renderHouse() {
  let displayHouseCards = house.cards.map(
    (c) => (houseCardsEl.textContent = " " + c)
  );
  houseCardsEl.textContent = "Cards: " + displayHouseCards;
  houseSumEl.textContent = "Sum: " + house.sum;
}

function renderPlayer() {
  let displayPlayerCards = player.cards.map(
    (c) => (playerCardsEl.textContent = " " + c)
  );
  playerCardsEl.textContent = "Cards: " + displayPlayerCards;
  playerSumEl.textContent = "Sum: " + player.sum;
checkForWinner();
  messageEl.textContent = message;
}

function renderGame() {
  renderHouse();
  renderPlayer();
}

function checkForWinner(){
    if(player.sum > 21){
        message = "Bust! You Lose!"
        player.isAlive = false;
    } else if(player.sum === 21){
        message = "BlackJack! You Win!"
        player.hasBlackJack;
        house.isAlive = false;
    } else if(house.sum === 21){
        message = "BlackJack For The House! You Lose"
        player.isAlive = false;
    } else if(player.sum < 21 && house.sum > 21){
        message = "House Bust! You Win!"
        player.hasBlackJack = true;
        house.isAlive = false;
    } else if(player.sum < 21 && house.sum < 21){
        message = "Draw Another Card?"
    }
}

function hitMe(){
    let playerCard = getRandomCard();
    player.cards.push(playerCard);
    player.sum += playerCard;
    if(player.sum < 21 && player.hasBlackJack === false){
        let houseCard = getRandomCard();
        house.cards.push(houseCard);
        house.sum += houseCard;
        
    }
}

function getRandomCard() {
  let rand = Math.floor(Math.random() * 13) + 1;
  if (rand === 1) {
    return 11;
  } else if (rand > 10) {
    return 10;
  } else return rand;
}
