function stringToInt(input) {
	var output = parseInt(input)
	if (isNaN(output) == true) {
		return NaN;
	}
	return output;
}

function maskNumber(input) {
	var output = "*******";
	for (var i=0; i<4; i++) {
		output += input[7+i];
	}
	return output;
}

function getAverage(input_array) {
	var sum = 0;
	for (var i=0; i<input_array.length; i++) {
		sum += input_array[i];
	}
	return sum/input_array.length;
}

function isMultipleSeven(input) {
	if (input % 7 == 0) {
		return true;
	}
	else {
		return false;
	}
}

function operation(operator, num1, num2) {
	var output;
	switch(operator) {
	case "add" : output = num1+num2;
		    break;
	case "substract" : output = num1-num2;
		    break;
	case "multiply" : output = num1*num2;
		    break;
	case "divide" : output = num1/num2;
		    break;
	default : console.log("Not Supported");
	}
	return output;
}

function triangleMtn(size) {
	var star = "*";
	for (var i=0; i<size; i++) {
		console.log(star);
		star += "*";
	}
}

console.log("Q1: hello homework3");
