
//Declare three variables to hold the location of each cell of the ship. Lets call them location1, location2 and location3.
var location1;
var location2;
var location3;
//Declare a variable to hold the user's current guess. Let's call it guess.
var guess;
//Declare a variable to hold the number of hits. We'll call it hits and set it to 0.
var hits = 0;
//Declare a variable to hold the number of guesses. We'll call it guesses and set it to 0.
var guesses = 0;
//Declare a variable to keep track of whether the ship is sunk or not. Lets call it isSunk and set it to false.
var isSunk = false;

location1 = Math.floor( Math.random() * 3 ) + 1;
location2 = location1 + 1;
location3 =  location2 + 1;

while(isSunk == false) {
	guess = prompt("Ready, aim, fire (select a number between 1 & 6): ");

	if (guess < 0 || guess > 6) {
		alert("please enter a valid cell number")
	} else {
		guesses = guesses + 1;

		if (guess == location1 || guess == location2 || guess == location3) {
			hits = hits + 1;
			alert("Hit!");

				if (hits == 3) {
				isSunk = true;
				alert("You sunk my battleship!");
			}
		} else { alert("miss!");}

	}

}

var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats)

// things that could be improved
// notify if you have already guessed a number
// if a non number is entered send an alert
	