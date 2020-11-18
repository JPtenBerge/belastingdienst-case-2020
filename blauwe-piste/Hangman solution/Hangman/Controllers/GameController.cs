using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Hangman.Models;
using Microsoft.AspNetCore.Mvc;
using Hangman.Utils;
using Hangman.Services;
using Hangman.Repositories;

namespace Hangman.Controllers
{
	public class GameController : Controller
	{
		public GameModel CurrentGame { get; set; }

		private readonly IGameRepository gameRepository;
		private readonly IWordRepository wordRepository;
		private readonly IPlayerRepository playerRepository;
		private readonly GameConfig gameConfig;
		public GameController(IGameRepository gameRepository, IWordRepository wordRepository, IPlayerRepository playerRepository, GameConfig gameConfig)
		{
			this.gameRepository = gameRepository;
			this.wordRepository = wordRepository;
			this.playerRepository = playerRepository;
			this.gameConfig = gameConfig;
		}

		public IActionResult Index()
		{
			return View();
		}

		[Route("game/new-game")]
		public IActionResult NewGame()
		{
			return View();
		}

		[Route("game/new-game")]
		[HttpPost]
		public IActionResult NewGame(string name)
		{
			var player = playerRepository.GetOrCreatePlayerByName(name);
			var wordToGuess = wordRepository.GetRandomWord();
			var newGame = new GameModel
			{
				WordToGuess = wordToGuess,
				WordToGuessId = wordToGuess.Id,
				StartTime = DateTime.Now,
				Player = player,
				PlayerId = player.Id
			};
			gameRepository.Add(newGame);
			return RedirectToAction("Game", new { id = newGame.Id });
		}


		[Route("game/{id:int}")]
		public IActionResult Game(int id)
		{
			CurrentGame = gameRepository.Get(id);
			return View(CurrentGame);
		}

		[Route("game/{id:int}/guess")]
		public IActionResult Guess(int id, string letter)
		{
			letter = letter.ToUpper();
			CurrentGame = gameRepository.Get(id);

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
			return DisplayGame();
		}

		private IActionResult DisplayGame()
		{
			return View("Game", CurrentGame);
		}

		private IActionResult IsValidGuess(string letter)
		{
			if (CurrentGame.NrOfIncorrectGuesses == gameConfig.MaxNrOfGuesses)
			{
				ModelState.AddModelError("game-over", "Helaas, je mag niet meer raden. Het spel zit erop!");
				return DisplayGame();
			}
			if (CurrentGame.GuessedLetters.Select(x => x.Letter).Contains(letter))
			{
				ModelState.AddModelError("already-guessed", $"De letter {letter} heb je al geprobeerd, probeer een andere!");
				return DisplayGame();
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
