let cols = document.querySelectorAll(".col")
let current_player = 1;

cols.forEach((col) => {
	col.onclick = (e) => {
		e.target.innerHTML = document.querySelector('.player'+current_player+'_play').innerHTML;
	}
});