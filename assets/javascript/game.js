$(document).ready(function () {
	//main variables
	var counter = 0;
	var wins = 0;
	var losses = 0;

	//update html scoreboard
	$('#Wins').text(wins);
	$('#Losses').text(losses);

	newNumbers();
	newGame();

	function newNumbers() {
		var numbers = []
		while (numbers.length < 4) {
			var randomNumber = Math.ceil(Math.random() * 15)
			var found = false;
			for (var i = 0; i < numbers.length; i++) {
				if (numbers[i] == randomNumber) {
					found = true;
					break
					console.log(randomNumber);
				}
			}
		}
	}


});