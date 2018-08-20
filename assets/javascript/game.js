//variables

var rocks = {
	rock1: {
		name: "Rock1",
		value: 0
	},
	rock2: {
		name: "Rock2",
		value: 0
	},
	rock3: {
		name: "Rock3",
		value: 0
	},
	rock4: {
		name: "Rock4",
		value: 0
	}

};

//scoring
var targetScore = 0;
var currentScore = 0;

//win and loss count
var winCount = 0;
var lossCount = 0;

//functions
var getRandom = function (min, max) {
	return Math.floor(Math.random() * (max + min + 1)) + min;

}

var startGame = function () {
	
	
	//sets score to 0
	currentScore = 0;

	//a new target score is chosen 19 and 120

	targetScore = getRandom(19, 120);
	
	//change values assigned to each rock between 1 and 12
	rocks.rock1.value = getRandom(1, 12);
	rocks.rock2.value = getRandom(1, 12);
	rocks.rock3.value = getRandom(1, 12);
	rocks.rock4.value = getRandom(1, 12);

	//change html for 
	$("#currentscore").html(currentScore);
	$("#targetscore").html(targetScore);



}

var addValues = function (rocks) {
	//change current score
	currentScore = currentScore + rocks.value;

	//change yourscore html
	$("#currentscore").html(currentScore);

	//call checkwin function
	checkWin();


	//testing log
	console.log("your score: " + currentScore);

}
//check win loss and reset game
var checkWin = function () {
	if (currentScore > targetScore) {
		alert("You lose!");
		console.log("you lost!")

		//add losses to loss counter
		lossCount++;

		//change loss count html
		$("#losses").html(lossCount);

		//restarts game
		startGame();

	} else if (currentScore == targetScore) {
		alert("You win!");
		console.log("You win");

		//add wins to the win counter
		winCount++;
		//change loss count html
		$("#wins").html(winCount);

		//restarts game
		startGame();

	}
}



//main process
startGame();

$("#rock1").click(function () {
	addValues(rocks.rock1);
});

$("#rock2").click(function () {
	addValues(rocks.rock2);
});

$("#rock3").click(function () {
	addValues(rocks.rock3);
});

$("#rock4").click(function () {
	addValues(rocks.rock4);
});