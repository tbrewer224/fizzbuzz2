$(document).ready(function () {

var userInput = prompt("Please enter an integer.");

/*I don't understand the instructions for converting a string to a number. It appears to be a number by default.*/

for (var i = 0; i < userInput; i++) {
	if(i % 3 == 0) {
		console.log("fizz");
		$('ul').append('<li>' + "fizz" + '</li>');
	}
	else if(i % 5 == 0) {
		console.log("buzz");
		$('ul').append('<li>' + "buzz" + '</li>');
	}
	else {
		console.log(i);
		$('ul').append('<li>' + i + '</li>');
	}
};
});