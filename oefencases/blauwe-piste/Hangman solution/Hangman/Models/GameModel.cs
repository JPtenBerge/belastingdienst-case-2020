using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hangman.Models
{
	public class GameModel
	{
		public int Id { get; set; }

		public WordModel WordToGuess { get; set; }

		public int WordToGuessId { get; set; }

		public int NrOfIncorrectGuesses { get; set; }

		public List<GuessedLetterModel> GuessedLetters { get; set; }

		public bool WordGuessed { get; set; }

		public DateTime StartTime { get; set; }

		public DateTime? EndTime { get; set; }

		public PlayerModel Player { get; set; }

		public int PlayerId { get; set; }
	}
}
