//Problem: Text input instructions aren't explicit enough.
//Solution: Add hints to focus user's thoughts and actions.

//Hide hint
$("form span").hide();

function answerEvent() {
	//Find out if input is valid
	if($(this).val().length > 15) {
	//Hide hint if valid
	$(this).next().hide();
	} else {
	//Else show hint
	$(this).next().show();
	}
}

//When event happens on why, how, what
$("#answer").focus(answerEvent).keyup(answerEvent);

//Problem: The information entered by the user is lost when the user finishes an objective.
//Solution: Print out the information on the page.

//When button pressed
//Store information
//When button pressed
//Print out information