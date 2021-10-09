let firstCard = 13;
let secondCard = 8;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

if ( sum < 21) {
  message = "Do you want to draw a new card?";
} else if (sum === 21) {
  message = "Blackjack!"; 
  hasBlackJack = true;
} else {
  message = "You Lose!";
  isAlive = false
}


console.log(message);