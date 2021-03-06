// simple JS function for converting strings to Proper Case
function properCase(str) {
	// this is for the very first character
	var properCase = str.substring(0, 1).toUpperCase() + str.substring(1, str.length).toLowerCase();

	// if there are spaces 
	var spaceStartPos = 0;
	while (properCase.indexOf(" ", spaceStartPos) != -1) {
		var indexOfSpace = properCase.indexOf(" ", spaceStartPos);

		properCase = properCase.substring(0, indexOfSpace + 1) +
			properCase.substring(indexOfSpace + 1, indexOfSpace + 2).toUpperCase() +
			properCase.substring(indexOfSpace + 2, properCase.length);
		spaceStartPos = indexOfSpace + 1;
	}

	// if there are dashes (there is usually only one)
	var dashStartPos = 0;
	while (properCase.indexOf("-", dashStartPos) != -1) {
		var indexOfDash = properCase.indexOf("-", dashStartPos);

		properCase = properCase.substring(0, indexOfDash + 1) +
			properCase.substring(indexOfDash + 1, indexOfDash + 2).toUpperCase() +
			properCase.substring(indexOfDash + 2, properCase.length);
		dashStartPos = indexOfDash + 1;
	}

	return properCase;
}

// this is a much more generic function for properCase
function properCase2(str) {
	// this is for the very first character
	var properCase = str.substring(0, 1).toUpperCase() + str.substring(1, str.length).toLowerCase();

	// this is the array containing all the characters after wich the rightmost side character is going to be Uppercased
	var chars = [" ", "-"];

	for (var i in chars) {
		var charStartPos = 0;
		while (properCase.indexOf(chars[i], charStartPos) != -1) {
			var indexOfChar = properCase.indexOf(chars[i], charStartPos);

			properCase = properCase.substring(0, indexOfChar + 1) +
				properCase.substring(indexOfChar + 1, indexOfChar + 2).toUpperCase() +
				properCase.substring(indexOfChar + 2, properCase.length);
			charStartPos = indexOfChar + 1;
		}

	}

	return properCase;
}
