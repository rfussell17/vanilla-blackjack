let firstCard = 13;
let secondCard = 8;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

if (sum < 21) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("Blackjack!");
  hasBlackJack = true;
} else {
  console.log("You Lose!");
  isAlive = false
}

console.log(hasBlackJack)