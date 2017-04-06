/*Mismanaged my time this week which is why assignment is half done.  
I Was able to create BasicCard constructor, however need to go back
and familiarlize myself on the Cloze logic. 

Will re-submit at a later date.*/



var inquirer = require("inquirer");

/*global vairables*/

var  correctAnswer = 0;
var  incorrectAnswer = 0;

/*Flashcard Basic constructor*/
function BasicCard (front1,back1,front2,back2) {
  this.front1 = front1;
  this.back1 = back1;
  this.front2 = front2;
  this.back2 = back2;
  this.questionPrompt = flashCardGame(this.front1, this.back1, this.front2, this.back2);
 }


// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement
function flashCardGame(front1, back1, front2, back2) {
	inquirer.prompt([
      {
        name: "answer1",
   		  message: front1
      }, {
        name: "answer2",
        message: front2
      }
    ]).then(function(answers) {
/*checks and displays whether the answers are right or not*/
      if (answers.answer1 === back1) {
      		console.log("Question 1: " + answers.answer1 + ". \nCorrect!");
      		correctAnswer += 1;
      	} else {
      		console.log("Question 1: " + answers.answer1 + ". \nOh.. Incorrect.");
      		incorrectAnswer += 1;
      	};

       if (answers.answer2 === back2) {
          console.log("Question 2: " + answers.answer2 + ". \nCorrect!");
          correctAnswer += 1;
        } else {
          console.log("Question 2: " + answers.answer2 + ". \nOh.. Incorrect.");
          incorrectAnswer += 1;
        };

/*Displays how many questions the user get right or wrong*/
/*Also asks whether the user wants to play again or not*/
      displayScore();
			 function displayScore() {
				console.log("\nCorrect Answers: " + correctAnswer);
			   console.log("Incorrect Answers: " + incorrectAnswer);

      		inquirer.prompt(
            {
		          name: "again",
		          type: "confirm",
		          message: "Would you like to try again?"
		        }).then(function(answerOne) {
    		      if (answerOne.again === true) {
    		        // starts new match with the same players
    		        begin();
    		        correctAnswer = 0;
    		        incorrectAnswer = 0;
    		      }
    		      else {
    		        console.log("Come back again soon!");
    		      }
		    });
      		};

      	});


};

/*starts the flashcard prompts     */   
function begin() {
  var newCard = new BasicCard(
    "Who was the 1st President of the United States", 
    "George Washington", 
    "Who wants to make 'America Great Again?'",
    "Donald Trump");
  newCard.questionPrompt;
}

begin();







 