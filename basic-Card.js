var inquirer = require("inquirer");

/*global vairables*/

var  correctAnswer = 0;
var  incorrectAnswer = 0;

function BasicCard (front,back) {
  this.front = front;
  this.back = back;
 }

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement
function flashCardGame() {
	inquirer.prompt([
      {
        name: "answer",
   		message: "Who was the first president of the United States?"
      }
    ]).then(function(answerOne) {
      // if the answer is yes, start the substitution prompts
      if (answerOne.answer === "George Washington") {
      		console.log("That is Correct!");
      		correctAnswer += 1;
      	} else {
      		console.log("Oh... That is Incorrect.");
      		incorrectAnswer += 1;
      	}

      	inquirer.prompt([
          {
            name: "answer",
   			message: "Which President wanted to make 'America Great Again?'"
          }
        ]).then(function(answerTwo) {
        	if (answerTwo.answer === "Donald Trump") {
      			console.log("That is Correct!");
      			correctAnswer += 1;
      		} else {
      			console.log("Oh... That is Incorrect.");
      			incorrectAnswer += 1;
      			};
      		displayScore();
			   function displayScore() {
				console.log("\nCorrect Answers: " + correctAnswer);
			    console.log("Incorrect Answers: " + incorrectAnswer);

      		inquirer.prompt(
      		{
		      name: "again",
		      type: "confirm",
		      message: "Would you like to try again?"
		    }).then(function(answer) {
		      if (answer.again === true) {
		        // starts new match with the same players
		        flashCardGame();
		        correctAnswer = 0;
		        incorrectAnswer = 0;
		      }
		      else {
		        console.log("Come back again soon!");
		      }
		    });
      		};

      	});


});
}
        


flashCardGame();






 