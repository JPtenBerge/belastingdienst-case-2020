using Hangman.Controllers;
using Hangman.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace Hangman.Tests
{
	[TestClass]
	public class GameControllerTests
	{
		GameController sut;
		Mock<IGameDictionary> gameDictionaryMock;

		[TestInitialize]
		public void Init()
		{
			// Because of its simplicity, mocking away this dictionary doesn't do
			// a whole lot at the moment. But suppose the dictionary was to make all
			// kinds of database calls or network requests. Then mocking would prove
			// much more valuable. Right now, it's a matter of principle: We want
			// to isolate the controller for testing here.
			gameDictionaryMock = new Mock<IGameDictionary>();
			gameDictionaryMock.Setup(x => x.GetRandomWord()).Returns("superb");

			sut = new GameController(gameDictionaryMock.Object);
			sut.Reset();
		}

		[TestMethod]
		public void IndexShouldInitializeTheGameIfNotStarted()
		{
			GameController.model = null; // reset static field
			var result = sut.Index();
			Assert.IsNotNull(GameController.model);
			Assert.IsNotNull(GameController.model.WordToGuess);
			Assert.IsInstanceOfType(result, typeof(ViewResult));
		}

		[TestMethod]
		public void IndexShouldNotReinitializeTheGameOnceStarted()
		{
			GameController.model.NrOfIncorrectGuesses = 3;
			sut.Index();
			Assert.AreEqual(3, GameController.model.NrOfIncorrectGuesses);
		}

		[TestMethod]
		public void GuessWithNoModelInitializationShouldRedirect()
		{
			GameController.model = null; // reset static field
			var result = sut.Guess("A");
			Assert.IsInstanceOfType(result, typeof(RedirectToActionResult));
		}

		[TestMethod]
		public void GuessWithMaxNrOfGuessedReachedShouldShowPageWithMessage()
		{
			GameController.model.NrOfIncorrectGuesses = GameController.model.MaxNrOfGuesses;
			var result = sut.Guess("A");
			var viewResult = result as ViewResult;

			Assert.IsInstanceOfType(result, typeof(ViewResult));
			Assert.AreEqual(1, viewResult.ViewData.ModelState.Count);
		}

		[TestMethod]
		public void GuessWithLowercaseLetterShouldMatchWithWord()
		{
			GameController.model.WordToGuess = "TEST now";
			sut.Guess("e");
			sut.Guess("W");

			Assert.AreEqual(0, GameController.model.NrOfIncorrectGuesses);
			Assert.AreEqual(2, GameController.model.GuessedLetters.Count);
		}

		[TestMethod]
		public void GuessWithAlreadyGuessedIncorrectLetterShouldNotCountAsIncorrectAndLetTheUserKnow()
		{
			GameController.model.WordToGuess = "T n";
			sut.Guess("Q");
			sut.Guess("Q");

			Assert.AreEqual(1, GameController.model.NrOfIncorrectGuesses);
			Assert.AreEqual(1, GameController.model.GuessedLetters.Count);
		}

		[TestMethod]
		public void GuessWithLastCorrectGuessShouldMarkWordAsGuessed()
		{
			GameController.model.WordToGuess = "Test";
			sut.Guess("T");
			sut.Guess("E");
			sut.Guess("S");

			Assert.AreEqual(true, GameController.model.WordGuessed);
		}

		[TestMethod]
		public void GuessShouldIgnoreSpacesWhenTryingToGuessTheWord()
		{
			GameController.model.WordToGuess = "T N";
			sut.Guess("T");
			sut.Guess("N");

			Assert.AreEqual(true, GameController.model.WordGuessed);
		}

		[TestMethod]
		public void ResetShouldSetUpNewGame()
		{
			sut.Guess("A");
			sut.Guess("B");
			sut.Guess("C");

			sut.Reset();

			Assert.AreEqual(0, GameController.model.NrOfIncorrectGuesses);
			Assert.AreEqual(0, GameController.model.GuessedLetters.Count);
		}
	}
}
