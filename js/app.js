/** 
 * @param {number} min nombre minimal compris
 * @param {number} max nombre maximal compris
 * @returns {number} nombre aleatoire entre min (compris) et max (compris)
 */
 function getRandomNumber(min, max){
    var randomNumber = Math.round(Math.random() * (max - min)) + min;
    return randomNumber;
}

/**

 * @param {String} [divId="player"] id de la div à cibler pour ajouter le dé
 */
function addDice(divId = "player"){
    
    var diceElement = document.createElement("div");

    diceElement.classList.add("dice");

    var randomResult = getRandomNumber(1,6);

    var position = (randomResult-1) * 100;
    diceElement.style.backgroundPositionX = "-" + position + "px";

    diceElement.addEventListener("click", function(event){
        console.log("click on dice", event.target);
    });

    var diceContainerDivElement = document.getElementById(divId);

    diceContainerDivElement.appendChild(diceElement);
}

function resetBoard(){
    
    var playerDivElement = document.getElementById("player");
    
    playerDivElement.innerHTML = "";
    
    var dealerDivElement = document.getElementById("dealer");
    dealerDivElement.innerHTML = "";

// OU AUTRE METHODE

    var boardElements = document.querySelectorAll(".board");
    for( var i = 0; i < boardElements.length; i++){
        boardElements[i].innerHTML = "";
    }
}

/**
 * @param {Number} nbDice nombre de dés à lancer
 */
function play(nbDice){
   
    resetBoard();

    for(var i = 0; i < nbDice; i++) {
        addDice("player");
        addDice("dealer");
    }

}


/**
 * @param {Event} event 
 */
function onButtonPlayClick(event){
    console.log("on a cliqué sur CLIC, c'est trop cool");

    var rangeDiceElement = document.getElementById("range_dice");

    var nbDice = Number(rangeDiceElement.value);

    console.log(nbDice);
    play(nbDice);
}



var buttonPlayElement = document.getElementById("play-btn");

buttonPlayElement.addEventListener("click", onButtonPlayClick);



var body = document.body;

body.addEventListener("keypress", function(event){
    console.log("key press event");

    var key = event.key;
    var nb = parseInt(key);
    if( !isNaN(nb) && nb > 0){
        play(nb);
    }
});


/**
 * @param {Event} event 
 */
function onRangeDiceChange(event){
    console.log("onRangeDiceChange", event);

   
    var rangeDiceElement = event.target;
  
    var inputValue = rangeDiceElement.value;

    var pElement = document.querySelector(".range-value-text")

    pElement.innerText = inputValue;
}


var rangeDiceElement = document.getElementById("range_dice");
rangeDiceElement.addEventListener("change", onRangeDiceChange);
