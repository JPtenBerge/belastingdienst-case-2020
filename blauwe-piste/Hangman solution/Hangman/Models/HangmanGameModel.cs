using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hangman.Models
{
	public class HangmanGameModel
	{
		public string WordToGuess { get; set; }

		public int MaxNrOfGuesses { get; set; } = 5;

		public int NrOfIncorrectGuesses { get; set; }

		public List<string> GuessedLetters { get; set; } = new List<string>();

		public bool WordGuessed { get; set; }
	}
}
