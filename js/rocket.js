var timer = null;
var countDownNumber = 10;

var changeState = function(state) {
	document.body.className = 'body-state'+state;
	clearInterval(timer); //if there's a timer, it gets cleared when we change states
	countDownNumber = 10;
	document.getElementById('countdown').innerHTML = countDownNumber;
	document.getElementById('anxious').className = 'anxious';
	document.getElementById('excited').className = 'excited';

	if (state == 2){
		timer = setInterval(function(){
			countDownNumber = countDownNumber-1; //starts before so the timer doesn't stick on 10
			document.getElementById('countdown').innerHTML = countDownNumber; //changes the html text for our variable value
			
			if (countDownNumber > 4 && countDownNumber <= 7){ //between 7 and 4, we make the astronaut anxious
				document.getElementById('anxious').className = 'anxious show';
			} else {
				document.getElementById('anxious').className = 'anxious';
			}

			if (countDownNumber > 1 && countDownNumber <= 4){ //between 4 and 1, we make the astronaut excited
				document.getElementById('excited').className = 'excited show';	
			} else {
				document.getElementById('excited').className = 'excited';	
			}

			if (countDownNumber <= 0){ //if we reach 0 after a loop, we change state
				changeState(3);
			}
		}, 500); //runs the loop every half second (1s=1000ms)
	} else if (state == 3){
		var success = setTimeout(function(){ //same as the interval but only lasts a certain time
			var randomNumber = Math.round(Math.random()*10);
			//success
			if (randomNumber > 5){
				changeState(4);
			} else {
				changeState(5); //oh no!!!
			}
		}, 2000);
	};
}