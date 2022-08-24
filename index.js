let player = {
    name : "Nisarga",
    money : 1400
}
let playerEl = document.getElementById("player-el")
let cards = [] //array - ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
playerEl.textContent = player.name + ": $" + player.money;


function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10){
        return 10
    }
   else if (randomCard === 1){
        return 11
    }
    else {
        return randomCard
    }
   
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        isAlive = true
    }
    else if (sum === 21) {
        message = "You've got BlackJack!";
        hasBlackJack = true;
    }
    else {
        message = "You're out.";
        isAlive = false;
    }
    messageEl.textContent = message;

    sumEl.textContent = "Sum: " + sum;
    //Render out two cards 
    cardsEl.textContent = "Cards: "

    for(i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    cardsEl.textContent += card + " "
    renderGame()
    }
}

