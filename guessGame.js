	alert('Thanks for checking my page read the text then answer the prompts');

var live = "Tacoma"
		var state = "Alabama";
		var age=31;
		var guess =  prompt('How old is Keith Rodgers Jr?');
	if (guess == 31 ) {
		alert('You are correct!')
	}
	else {
		alert('No, no try the (the curerrent year -1984)')
	};

	var guessState=prompt('Which State was Keith Born?');

	if (guessState === "Alabama" || guessState === "ALABAMA" || guessState === "alabama"){
			alert('You are correct!')
		}
	else {
		alert('Oh no, you didnt read the clue...')
		 };
	var guessLive = prompt('Which City does Keith live in?')
	if (guessLive === "Tacoma" || guessLive ==="TACOMA" || guessLive ==="tacoma") 
		{
			alert('Good ole Tacoma')
		}
	else {
		alert('Try reading the text again')
	};