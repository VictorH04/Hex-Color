// ! Immediate invoked function expression
// ! Will create local scope so does not pollute global scope

// ! Creating invoked function
(function() {
	// Targeting the button and the HEX-value
	const hexValue = document.getElementById('hex-value');
	const btn = document.getElementById('btn');

	// Adding the eventListener for the button
	btn.addEventListener('click', createHex);

	// Creating the (createHex) function
	function createHex() {
		// The hexValues
		const hexValues = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];

		// Creating a variable that holds the hexColor
		let hexColor = '#';

		// Creating a forloop that's gonna loop six times, because i want six hex-numbers.
		for (let i = 0; i < 6; i++) {
			// Creating random number each time we loop over the array.
			let random = Math.floor(Math.random() * hexValues.length);
			// console.log(random);

			// Adding the random numbers to the hexColor variable.
			hexColor += hexValues[random];
		}
		// Adding the color each time we run the loop to the body.
		document.body.style.backgroundColor = hexColor;

		// Displaying the hexColor with the textContent
		hexValue.textContent = hexColor;
	}
})();
