function rollDice() { //hard coded as 1-6 dice roll
  return Math.floor(Math.random() * 6) + 1;
}

function findMax(listofnumbers) {
	var top_dog = 0; //initialize to zero to get first element
	var counter = 0; //for the 4th part of lucky sevens (roll count at max)
	for (var j = 0; j < listofnumbers.length; j++) {
		if (listofnumbers[j] > top_dog) { //if element is bigger
			top_dog = listofnumbers[j]; //make it the new max
			counter = j; //record the index of the current max
		}
		else {
			top_dog = top_dog;
		}
	}
	return ([top_dog, (counter+1)]); //return our max and the index of said max (+1 for array index starting at zero)
}

function luckySevens(bet) {
	var dice1 = 0;
	var dice2 = 0;
	var roundCounter = 0;
	var results = new Array();
	while (bet > 0) { //only can play while we still have money
		dice1 = rollDice();
		dice2 = rollDice();
		if (dice1 + dice2 == 7) {
			bet += 4; //add 4 dollars for a win
			roundCounter++;
			results.push(bet); //add this value of bet to our max matrix
			console.log("win");
			}
			else {
				bet -= 1; //deduct 1 dollar for a loss
				roundCounter++;
				results.push(bet); //add this value of bet to our max matrix
				console.log("loss");
			}
		}
		var maxInfo = findMax(results);
		return([roundCounter,maxInfo[0],maxInfo[1]]); //return rounds, max amount, and roll count at highest
	
}


//Form handling from number chart code along
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["luckySevens"].elements.length; 
        loopCounter++) {
        if (document.forms["luckySevens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["luckySevens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 
function resetForm() {
    clearErrors();
    document.forms["luckySevens"]["bet"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["luckySevens"]["bet"].focus();
}
function validateItems() {
    clearErrors();
    var bet = Number(document.forms["luckySevens"]["bet"].value); 
    if (bet == "" || isNaN(bet) || bet <=0 || Number.isInteger(bet) != true) {
        alert("Bet must be a whole number greater than zero.");
        document.forms["luckySevens"]["bet"]
           .parentElement.className = "form-group has-error";
        document.forms["luckySevens"]["bet"].focus();
        return false;
    }
	var luckyArray = luckySevens(bet);
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Play";
   document.getElementById("startingBet").innerText = Number(bet);
   document.getElementById("totalRolls").innerText = luckyArray[0];
   document.getElementById("highestAmount").innerText = luckyArray[1];
   document.getElementById("challengingResult").innerText = luckyArray[2];
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}