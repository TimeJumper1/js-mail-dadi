// "faccio tirare un dado all'utente"
alert('tira un dado');
let userDice = Math.floor(Math.random() * 6) + 1;
console.log(userDice);
let computerDice = Math.floor(Math.random() * 6) + 1;
console.log(computerDice);
if (userDice < computerDice ) {

    alert('hai perso');
}else if (userDice > computerDice) {

    alert('hai vinto');
} else if (userDice === computerDice) {
    alert('pareggio :/');
}


