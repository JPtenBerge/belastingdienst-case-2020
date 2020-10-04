using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Hangman.Models;
using Microsoft.AspNetCore.Mvc;
using Hangman.Utils;
using Hangman.Services;

namespace Hangman.Controllers
{
	public class GameController : Controller
	{
		// normally, the game state would be stored in a database of some sort
		public static HangmanGameModel model;

		// dependency injected dictionary service
		private IGameDictionary gameDictionary;
		
		public GameController(IGameDictionary gameDictionary)
		{
			this.gameDictionary = gameDictionary;
		}

		public IActionResult Index()
		{
			// when someone visits the application for the first time, initialize a game
			if (model == null)
			{
				Reset();
			}
			return DisplayGame();
		}

		public IActionResult Guess(string letter)
		{
			letter = letter.ToUpper();

			// for when someone skips the index page
			if (model == null)
			{
				return RedirectToAction("Index");
			}

			// is it a valid guess? game still going, letter not guessed before?
			var isValidGuessResult = IsValidGuess(letter);
			if (isValidGuessResult != null)
			{
				return isValidGuessResult;
			}

			// if letter isn't in word, then increase the number of incorrect guesses
			if (!model.WordToGuess.ToUpper().Contains(letter))
			{
				model.NrOfIncorrectGuesses++;
			}

			model.GuessedLetters.Add(letter);

			// has the word been solved?
			if (HasWordBeenGuessed())
			{
				model.WordGuessed = true;
			}

			return DisplayGame();
		}

		public IActionResult Reset()
		{
			var word = gameDictionary.GetRandomWord();
			model = new HangmanGameModel();
			model.WordToGuess = word;
			return RedirectToAction("Index");
		}

		private IActionResult DisplayGame()
		{
			return View("Index", model);
		}

		private IActionResult IsValidGuess(string letter)
		{
			if (model.NrOfIncorrectGuesses == model.MaxNrOfGuesses)
			{
				ModelState.AddModelError("game-over", "Helaas, je mag niet meer raden. Het spel zit erop!");
				return DisplayGame();
			}
			if (model.GuessedLetters.Contains(letter))
			{
				ModelState.AddModelError("already-guessed", $"De letter {letter} heb je al geprobeerd, probeer een andere!");
				return DisplayGame();
			}
			return null;
		}

		private bool HasWordBeenGuessed()
		{
			// filter out spaces and uppercase it for comparison
			var word = model.WordToGuess.Replace(" ", "").ToUpper();
			foreach (var letter in word)
			{
				if (!model.GuessedLetters.Contains(letter.ToString()))
				{
					return false;
				}
			}

			return true;
		}
	}
}
