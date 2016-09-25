window.onload = function() {
	var btnContainer = document.querySelector('.btn-container');
	var btnGreen = btnContainer.querySelector('.green');
	var btnRed = btnContainer.querySelector('.red');
	var btnBlue = btnContainer.querySelector('.blue');
	var btnYellow = btnContainer.querySelector('.yellow');
	var btnStart = document.querySelector('.start');

	var setupArray = setup();
	var round = setupArray[0];
	var index = setupArray[1];
	var seq = setupArray[2];
	var state = setupArray[3];
	var message = document.getElementById("message");

	console.log(state);
	console.log(round);

	btnStart.addEventListener( 'click', function(event){
		if (state == "Start") {
			state = "Wait";
			message.innerHTML = "Watch Carefully";
			state = compTurn(round, seq, state, message);
		}
		btnStart.style.display = "none";
	}, false);

	btnGreen.addEventListener( 'click', function(event) {
		index = checkButton(0, round, index, seq);
		if (index == -1) {
			message.innerHTML = "Game Over"
			setupArray = setup();
			round = setupArray[0];
			index = setupArray[1];
			seq = setupArray[2];
			state = setupArray[3];
			btnStart.style.display = "block";
		}
		if (index == round) {
			round = round + 1;
			if (round == seq.length + 1) {
				message.innerHTML = "You Win!";
				setupArray = setup();
				round = setupArray[0];
				index = setupArray[1];
				seq = setupArray[2];
				state = setupArray[3];
				btnStart.style.display = "block";
			}
			else{
				index = 0;
				state = "Wait";
				message.innerHTML = "Watch Carefully";
				state = compTurn(round, seq, state, message);
			}
		}


	}, false);

	btnRed.addEventListener( 'click', function(event){
		index = checkButton(1, round, index, seq);
		if (index == -1) {
			message.innerHTML = "Game Over"
			setupArray = setup();
			round = setupArray[0];
			index = setupArray[1];
			seq = setupArray[2];
			state = setupArray[3];
			btnStart.style.display = "block";
		}
		if (index == round) {
			round = round + 1;
			if (round == seq.length + 1) {
				message.innerHTML = "You Win!";
				setupArray = setup();
				round = setupArray[0];
				index = setupArray[1];
				seq = setupArray[2];
				state = setupArray[3];
				btnStart.style.display = "block";
			}
			else{
				index = 0;
				state = "Wait";
				message.innerHTML = "Watch Carefully";
				state = compTurn(round, seq, state, message);
			}
		}

	}, false);

	btnBlue.addEventListener( 'click', function(event) {
		index = checkButton(2, round, index, seq);
		if (index == -1) {
			message.innerHTML = "Game Over"
			setupArray = setup();
			round = setupArray[0];
			index = setupArray[1];
			seq = setupArray[2];
			state = setupArray[3];
			btnStart.style.display = "block";
		}
		if (index == round) {
			round = round + 1;
			if (round == seq.length + 1) {
				message.innerHTML = "You Win!";
				setupArray = setup();
				round = setupArray[0];
				index = setupArray[1];
				seq = setupArray[2];
				state = setupArray[3];
				btnStart.style.display = "block";
			}
			else{
				index = 0;
				state = "Wait";
				message.innerHTML = "Watch Carefully";
				state = compTurn(round, seq, state, message);
			}
		}


	}, false);

	btnYellow.addEventListener( 'click', function(event){
		index = checkButton(3, round, index, seq);
		if (index == -1) {
			message.innerHTML = "Game Over"
			setupArray = setup();
			round = setupArray[0];
			index = setupArray[1];
			seq = setupArray[2];
			state = setupArray[3];
			btnStart.style.display = "block";
		}
		if (index == round) {
			round = round + 1;
			if (round == seq.length + 1) {
				message.innerHTML = "You Win!";
				setupArray = setup();
				round = setupArray[0];
				index = setupArray[1];
				seq = setupArray[2];
				state = setupArray[3];
				btnStart.style.display = "block";
			}
			else{
				index = 0;
				state = "Wait";
				message.innerHTML = "Watch Carefully";
				state = compTurn(round, seq, state, message);
			}
		}


	}, false);
};

function randomSequence(size) {
	var seq = [];
	for (i = 0; i < size; i++)
	{
		seq[i] = Math.floor(Math.random()*4);
	}
	return seq;
};

function setup() {
	return [1, 0, randomSequence(100), "Start"];
};

function compTurn(round, seq, state, message){
	var i = 0;
	function myLoop() {
		setTimeout(function (){
			if (i % 2 == 0){
				console.log(seq[i/2]);
				illuminateButton(seq[i/2]);
				i++;
				console.log("i = " + i);
				if (i/2 < round){
					myLoop();
				}
				if (i/2 == round){
					state = "Play";
					console.log(state);
					message.innerHTML = "Your turn";
					deIlluminateButtons();
					return state;
				}
			}
			else{
				i++;
				console.log("i = " + i);
				deIlluminateButtons();
				if (i/2 < round){
					myLoop();
				}
				else {
					state = "Play";
					console.log(state);
					message.innerHTML = "Your turn";
					return state;
				}
			}
		}, 1000)
	}
	myLoop();
};

function illuminateButton(num){
	deIlluminateButtons();
	var btnContainer = document.querySelector('.btn-container');
	var btnGreen = btnContainer.querySelector('.green');
	var btnRed = btnContainer.querySelector('.red');
	var btnBlue = btnContainer.querySelector('.blue');
	var btnYellow = btnContainer.querySelector('.yellow');
	if (num == 0) {
		btnGreen.style.backgroundColor = "#00e64d";
	}
	else if (num == 1) {
		btnRed.style.backgroundColor = "#ff1a1a";
	}
	else if (num == 2) {
		btnBlue.style.backgroundColor = "#3385ff";
	}
	else if (num == 3) {
		btnYellow.style.backgroundColor = "#ffff33";
	}

};

function deIlluminateButtons(){
	var btnContainer = document.querySelector('.btn-container');
	var btnGreen = btnContainer.querySelector('.green');
	var btnRed = btnContainer.querySelector('.red');
	var btnBlue = btnContainer.querySelector('.blue');
	var btnYellow = btnContainer.querySelector('.yellow');
	btnGreen.style.backgroundColor = "#009933";
	btnRed.style.backgroundColor = "#cc0000";
	btnBlue.style.backgroundColor = "#0052cc";
	btnYellow.style.backgroundColor = "#b3b300";
};

function checkButton(button, round, index, seq){
	console.log("Checking button:" + button + " Against " + seq[index]);
	if(button == seq[index]){
		index = index + 1;
		console.log("Correct! Index:" + index);
		return index;
	}
	else {
		return -1;
	}
};




