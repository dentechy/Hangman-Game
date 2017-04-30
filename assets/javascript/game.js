//This sets up the JavaScript that listens for key events and checks to see if the user guessed the correct keys
//Some key points:
//1. The initial setup calls for pressing any key to get started. Therefore there must be a listening event for any key that is pressed.
//Possible code to address point #1:
//document.onkeypress=function(e){ //do required work }
//2. Variables need to be declared that do the following: The words that the user needs to guess (could be an array that gets cycled through as the game progresses), a counter that keeps track of the letters already used and another counter to keep track of the number of guesses.


document.onkeypress = function(event) {
        alert("You pressed a key!")

     }
