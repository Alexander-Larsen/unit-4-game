$(document).ready(function () {
	//main variables
	var counter = 0;
	var wins = 0;
	var losses = 0;

	//selects random number to be shown at game start
	var Random=Math.floor(Math.random()*101+19)


	//update html elements
	$('#randomNumber').text(Random);
	$('#wins').text(wins);
	$('#losses').text(losses);
	$('#counter').text(counter);

	//setting up the random numbers assocaited with each picture.
	var num1= Math.floor(math.Random()*11+1)




});