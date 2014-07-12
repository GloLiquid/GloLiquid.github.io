//Problem: Text input instructions aren't explicit enough.
//Solution: Add hints to focus user's thoughts and actions.

//Hide hint
$("form span").hide();

function firstEvent() {
	//Find out if input is valid
	if($(this).val().length > 8) {
	//Hide hint if valid
	$(this).next().hide();
	} else {
	//Else show hint
	$(this).next().show();
	}
}

//When event happens on why, how, what
$("#first").focus(firstEvent).keyup(firstEvent);


//Hide hint
$("form span").hide();

function secondEvent() {
	//Find out if input is valid
	if($(this).val().length > 8) {
	//Hide hint if valid
	$(this).next().hide();
	} else {
	//Else show hint
	$(this).next().show();
	}
}

//When event happens on why, how, what
$("#second").focus(secondEvent).keyup(secondEvent);

//Hide hint
$("form span").hide();

function thirdEvent() {
	//Find out if input is valid
	if($(this).val().length > 8) {
	//Hide hint if valid
	$(this).next().hide();
	} else {
	//Else show hint
	$(this).next().show();
	}
}

//When event happens on why, how, what
$("#third").focus(thirdEvent).keyup(thirdEvent);


//Problem: The information entered by the user is lost when the user finishes an objective.
	
//Solution: Print out the information on the page.

//When button pressed
//Store information
//When button pressed
//Print out information