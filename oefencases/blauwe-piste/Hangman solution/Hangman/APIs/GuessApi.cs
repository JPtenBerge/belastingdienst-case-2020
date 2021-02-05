using Hangman.Models;
using Hangman.Repositories;
using Hangman.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hangman.Apis
{
	[Route("api/game/{gameId:int}/guess")]
	[ApiController]
	public class GuessApi : ControllerBase
	{
		private GameModel CurrentGame { get; set; }

		private IGameRepository gameRepository;
		private GameConfig gameConfig;
		public GuessApi(IGameRepository gameRepository, GameConfig gameConfig)
		{
			this.gameRepository = gameRepository;
			this.gameConfig = gameConfig;
		}

		[HttpPost]
		public ActionResult<GameModel> Post(int gameId, GuessModel guess)
		{
			var letter = guess.Letter.ToUpper();
			CurrentGame = gameRepository.Get(gameId);

			// is it a valid guess? game still going, letter not guessed before?
			var isValidGuessResult = IsValidGuess(letter);
			if (isValidGuessResult != null)
			{
				return isValidGuessResult;
			}

			// if letter isn't in word, then increase the number of incorrect guesses
			if (!CurrentGame.WordToGuess.Word.ToUpper().Contains(letter))
			{
				CurrentGame.NrOfIncorrectGuesses++;
			}

			CurrentGame.GuessedLetters.Add(new GuessedLetterModel { Letter = letter });

			// has the word been solved?
			if (HasWordBeenGuessed())
			{
				CurrentGame.WordGuessed = true;
			}

			// note end time if word has been guessed or if this was the final incorrect guess
			if (HasWordBeenGuessed() ||
				CurrentGame.NrOfIncorrectGuesses == gameConfig.MaxNrOfGuesses)
			{
				CurrentGame.EndTime = DateTime.Now;
			}

			gameRepository.Update(CurrentGame);
			return CurrentGame;
		}

		private ActionResult<GameModel> IsValidGuess(string letter)
		{
			if (CurrentGame.NrOfIncorrectGuesses == gameConfig.MaxNrOfGuesses)
			{
				ModelState.AddModelError("game-over", "Helaas, je mag niet meer raden. Het spel zit erop!");
				return BadRequest(ModelState);
			}
			if (CurrentGame.GuessedLetters.Select(x => x.Letter).Contains(letter))
			{
				ModelState.AddModelError("already-guessed", $"De letter {letter} heb je al geprobeerd, probeer een andere!");
				return BadRequest(ModelState);
			}
			return null;
		}

		private bool HasWordBeenGuessed()
		{
			// filter out spaces and uppercase it for comparison
			var word = CurrentGame.WordToGuess.Word.Replace(" ", "").ToUpper();
			foreach (var letter in word)
			{
				if (!CurrentGame.GuessedLetters.Select(x => x.Letter).Contains(letter.ToString()))
				{
					return false;
				}
			}

			return true;
		}
	}
}
