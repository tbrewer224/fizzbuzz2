$(document).ready(function () {

var userInput = prompt("Please enter an integer.");



for (var i = 0; i < 101; i++) {
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