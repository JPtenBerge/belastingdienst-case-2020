﻿function guess(letter) {
	// get gameId from URL
	let gameId = +window.location.pathname.split('/').pop();

	fetch(`/api/game/${gameId}/guess`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ letter })
	})
		.then(x => x.json())
		.then(res => {
			// check if errors occurred
			if ('game-over' in res || 'already-guessed' in res) {
				return Promise.reject(res);
			}

			// all is good, let the next .then() be called
			return res;
		})
		.then(gameState => {
			// update the word with the newly guessed letter
			let guessedLetters = gameState.guessedLetters.map(x => x.letter);
			updateWord(gameState.wordToGuess.word, guessedLetters);
			updateNrOfTries(gameState.nrOfIncorrectGuesses);
			disableGuessedLetters(guessedLetters);

			// has the word been guessed?
			if (gameState.wordGuessed) {
				handleWordGuessed();
				return Promise.resolve();
			}

			// has the maximum number of guesses been reached?
			if (gameState.nrOfIncorrectGuesses === 5) {
				handleWordNotGuessed(gameState.wordToGuess.word);
				return Promise.resolve();
			}
		})
		.catch(err => {
			let [key] = Object.keys(err);
			document.querySelector('#error-message').innerText = err[key];
		});
}

function disableGuessedLetters(letters) {
	// enable all buttons
	document.querySelectorAll(`[class*="letter-"]`).forEach(el => el.classList.remove('guessed'));

	// disable the buttons for the guessed letters
	for (let letter of letters) {
		document.querySelector(`.letter-${letter}`).classList.add('guessed');
		document.querySelector(`.letter-${letter} a`).onclick = '';
	}
}
function updateWord(word, guessedLetters) {
	let wordEl = document.querySelector('#word-to-guess');

	word = word.toUpperCase();

	// clear current word
	wordEl.innerHTML = '';

	for (let char of word) {
		// When these spans were rendered server-side, the view engine would include
		// whitespace causing the letters to be spaced out from each other.
		// With these span strings, that changes. A purist would solve this with CSS 
		// since this is a presentation thing, but I want to focus this solution on 
		// the AJAX / JavaScript part, so I'm just gonna add a space.
		if (char === ' ') {
			wordEl.innerHTML += '<span>&nbsp;</span> ';
		}
		else if (guessedLetters.includes(char)) {
			wordEl.innerHTML += `<span>${char}</span> `
		}
		else {
			wordEl.innerHTML += '<span>_</span> ';
		}
	}

}
function updateNrOfTries(nrOfIncorrectGuesses) {
	document.querySelector('.maxTry').innerText = nrOfIncorrectGuesses;

	for (let i = 1; i <= nrOfIncorrectGuesses; i++) {
		document.querySelector('.hangman').classList.add(`hang${i}`);
	}
}

function handleWordGuessed() {
	document.querySelector('.box.good').removeAttribute('hidden');
	document.querySelector('#letters').setAttribute('hidden', '');
}

function handleWordNotGuessed(word) {
	document.querySelector('.box.bad').removeAttribute('hidden');
	document.querySelector('#letters').setAttribute('hidden', '');
	updateWord(word, word.toUpperCase().split(''));
}