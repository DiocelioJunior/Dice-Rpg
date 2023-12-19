var selectDices;
const diceValue = document.getElementById('number');
const dice = document.getElementById('dice');

typeDice();

dice.addEventListener('click', rollDice);

function typeDice() {
    selectDices = document.getElementById('select-dices').value;
    
}

function rollDice() {
    var diceElement = document.getElementById('dice');

    diceElement.classList.add('rolling');

    setTimeout(function() {
        var randomNumber = Math.floor(Math.random() * (Number(selectDices)) + 1);
        diceValue.innerText = randomNumber;
        diceElement.classList.remove('rolling');
    }, 1000);
}
