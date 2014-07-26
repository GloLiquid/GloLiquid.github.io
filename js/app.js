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

//Hide hint
$("form span").hide();

function answerbEvent() {
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
$("#answerb").focus(answerbEvent).keyup(answerbEvent);


//Hide hint
$("form span").hide();

function answernEvent() {
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
$("#answern").focus(answernEvent).keyup(answernEvent);


//Problem: The time it takes to complete tasks can be demoralising
//Solution: Build a timer to allow users to measure their progress at set intervals

//runner: jQuery plugin
$('#runner').runner({
    stopAt: 10 * 60 * 1000
}).on('runnerFinish', function(eventObject, info) {
    showButtons();
});

//Start runner
$('#start').click(function() {
    //Stop false from running
	stop = false;
	showStop();
	$('#runner').runner('start');
	show();
});

//Stop runner
$('#stop').hide();
$('#stop').click(function() {
	//Stop start from running
	start = false
	showButtons();
	$('#runner').runner('stop')
	show();
});

//Hide start page navigation button
$('.buttons').hide();

//Show stop
function showStop() {
	$('#start').hide()
	$('#stop').show();
}

//Show navigation button
function showButtons() {
	$('#start').hide()
	$('#stop').hide();
	$('.buttons').show();
}


//Problem: The information entered by the user is lost when the user finishes an objective.
//Solution: Print out the information on the page.

//When button pressed
//Store information
//When button pressed
//Print out information
