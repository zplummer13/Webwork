window.onload = function () {

	var eyeAns = [
		"Yes, that is no mystery to me",
		"That is as unlikely as immortality",
		"No matter how I could answer, I would be lying"
	];

	var index = eyeAns.length - 1;

	var textbox = document.getElementById("textbox");
	var answer = document.getElementById("answer");
	textbox.value = "Will you answer my questions?";
	var firstQuestion = true;

	textbox.addEventListener("keypress", function(e) {
		var key = e.which || e.keyCode;
		if (firstQuestion == true){
			if (key === 13) {
				answer.innerHTML = "Yes, I will";
				textbox.placeholder = textbox.value;
				textbox.value = "";
			}
			firstQuestion = false;
		}
		else if (firstQuestion == false){
			if (key === 13) {
				index = ask(index, eyeAns);
				answer.innerHTML = eyeAns[index];
				textbox.placeholder = textbox.value;
				textbox.value = "";
			}
		}
		if (key != 13) {
			answer.innerHTML = "&nbsp;";
		}
	});
};

function ask(index, eyeAns) {
	var newIndex = index;
	while (newIndex == index) {
		newIndex = Math.floor(Math.random() * (eyeAns.length));
	}
	return newIndex;
};