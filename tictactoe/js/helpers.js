function showMsg(message) {
	let msg =  document.querySelector('#msg');
	msg.innerHTML = message;
    msg.style.display = "block";
}

function clearMsg() {
    let msg =  document.querySelector('#msg');
	msg.innerHTML = "";
    msg.style.display = "none";
}

function checkGame() {
    game_win = false;

    // check the end of the game
    if (a1.innerHTML != "" && a1.innerHTML == a2.innerHTML && a1.innerHTML == a3.innerHTML) {
        a1.classList.add('win');
        a2.classList.add('win');
        a3.classList.add('win');
        game_win = true;
    }

    if (b1.innerHTML != "" && b1.innerHTML == b2.innerHTML && b1.innerHTML == b3.innerHTML) {
        b1.classList.add('win');
        b2.classList.add('win');
        b3.classList.add('win');
        game_win = true;
    }

    if (c1.innerHTML != "" && c1.innerHTML == c2.innerHTML && c1.innerHTML == c3.innerHTML) {
        c1.classList.add('win');
        c2.classList.add('win');
        c3.classList.add('win');
        game_win = true;
    }

    if (a1.innerHTML != "" && a1.innerHTML == b1.innerHTML && a1.innerHTML == c1.innerHTML) {
        a1.classList.add('win');
        b1.classList.add('win');
        c1.classList.add('win');
        game_win = true;
    }

    if (a2.innerHTML != "" && a2.innerHTML == b2.innerHTML && a2.innerHTML == c2.innerHTML) {
        a2.classList.add('win');
        b2.classList.add('win');
        c2.classList.add('win');
        game_win = true;
    }

    if (a3.innerHTML != "" && a3.innerHTML == b3.innerHTML && a3.innerHTML == c3.innerHTML) {
        a3.classList.add('win');
        b3.classList.add('win');
        c3.classList.add('win');
        game_win = true;
    }

    if (a1.innerHTML != "" && a1.innerHTML == b2.innerHTML && a1.innerHTML == c3.innerHTML) {
        a1.classList.add('win');
        b2.classList.add('win');
        c3.classList.add('win');
        game_win = true;
    }

    if (a3.innerHTML != "" && a3.innerHTML == b2.innerHTML && a3.innerHTML == c1.innerHTML) {
        a3.classList.add('win');
        b2.classList.add('win');
        c1.classList.add('win');
        game_win = true;
    }
    
    return game_win;
}