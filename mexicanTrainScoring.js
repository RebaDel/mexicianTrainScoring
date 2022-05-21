//# Starting as pseudo code.  
//# To be developed as pure javascript.  
//# This is expected to be project to learn git and github collaberation and version control, as well as to improve Javascript skills.

//# To be run from console.

//# Game Initalialization

//# Accept number as input and set as variable.
var numPlayers = prompt("How many players?", "Enter number here.");
//convert answer string to int
numPlayers = parseInt(numPlayers);

//create players array to hold player objects
const players = [];

if (Number.isInteger(numPlayers) === true){
//instantiate player objects should include string name, int total, array roundScore
  for (i = 0; numPlayers > 0; i++) {
  players[i] = {
    name: prompt("Enter the next player's name.", "name"),
    scoreTotal: 0,
    roundScores: [],
  }
  numPlayers --;
}
}
//do not test from here down yet - endless loop with no prompt for some reason
var round = 0;
while (newScore != -1){
  for (i = 0; numPlayers > 0; i++){ 
  //outline for adding scores with -1 ending the game
    alert("Round " + round);
    var newScore = prompt("What is the next score for " + players[i].name +"? Enter -1 to end the game.");
    if (newScore != -1){
      players[i].roundScores[round] = newScore; //add score to that player's round score array
      players[i].scoreTotal += newScore; //add score to the total
    } else {
      console.log(players); //end of game, print out names and scores
      break;
    }
  }
  round++;
}
/*  
roundNumber = 12; 
print $roundNumber;
if (roundNumber > 0):{
  //# implement play score math;
  pass;
} else {
print finalScores;
exit 0;
}
*/

//# TODO:

//# Expand to be a web app.

//# Add API.

//# Use this as a starting point for implementation for not pure javascript libraries such as React, jquery.

//# Later to use with frameworks including AngularJS, Angular, and NodeJS.
