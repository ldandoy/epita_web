let cols = document.querySelectorAll(".col")
let current_player = 1;

cols.forEach((col) => {
	col.onclick = (e) => {
		// Checked if the player can click on the cell
		if (e.target.innerHTML == "") {
			// Put the symbol in the col
			e.target.innerHTML = document.querySelector('.player'+current_player+'_play').innerHTML;

			// check the end of the game

			// remove the active class from the current_player
			document.querySelector(".player"+current_player).classList.remove("active");

			// Switch the current_player after playing
			if (current_player == 1) {
				current_player = 2;
			} else {
				current_player = 1;
			}

			// Add the active class to current_player
			document.querySelector(".player"+current_player).classList.add("active");
		} else {
			// When a player play in a not empty cell
			alert('You can play here someone alreay play there !')
		}
	}
});