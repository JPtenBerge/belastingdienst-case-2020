using Hangman.Controllers;
using Hangman.Models;
using Hangman.Repositories;
using Hangman.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;

namespace Hangman.Tests
{
	[TestClass]
	public class GameControllerTests
	{
		GameController sut;
		Mock<IGameRepository> gameRepositoryMock;
		Mock<IPlayerRepository> playerRepositoryMock;
		Mock<IWordRepository> wordRepositoryMock;
		GameConfig gameConfig;
		PlayerModel player;
		WordModel word;
		GameModel gameMock;

		[TestInitialize]
		public void Init()
		{
			gameConfig = new GameConfig();
			word = new WordModel { Id = 8, Word = "superb" };
			player = new PlayerModel { Id = 4, Name = "Frank", Games = new List<GameModel>() };
			gameMock = new GameModel
			{
				Id = 16,
				WordGuessed = false,
				StartTime = DateTime.Now.AddDays(-5),
				GuessedLetters = new List<GuessedLetterModel>(),
				NrOfIncorrectGuesses = 0,
				Player = player,
				PlayerId = player.Id,
				WordToGuess = word,
				WordToGuessId = word.Id
			};

			playerRepositoryMock = new Mock<IPlayerRepository>();
			playerRepositoryMock.Setup(x => x.GetOrCreatePlayerByName(It.IsAny<string>())).Returns(player);

			wordRepositoryMock = new Mock<IWordRepository>();
			wordRepositoryMock.Setup(x => x.GetRandomWord()).Returns(word);

			gameRepositoryMock = new Mock<IGameRepository>();
			gameRepositoryMock.Setup(x => x.Add(It.IsAny<GameModel>()));
			gameRepositoryMock.Setup(x => x.Get(It.IsAny<int>())).Returns(gameMock);

			sut = new GameController(gameRepositoryMock.Object, wordRepositoryMock.Object, playerRepositoryMock.Object, gameConfig);
		}

		[TestMethod]
		public void NewGameShouldInitializeANewGame()
		{
			var result = sut.NewGame("Frank");

			playerRepositoryMock.Verify(x => x.GetOrCreatePlayerByName(It.IsAny<string>()));
			wordRepositoryMock.Verify(x => x.GetRandomWord());
			gameRepositoryMock.Verify(x => x.Add(It.IsAny<GameModel>()));

			Assert.IsInstanceOfType(result, typeof(RedirectToActionResult));
		}

		[TestMethod]
		public void GameShouldRetrieveGameById()
		{
			sut.Game(15);
			gameRepositoryMock.Verify(x => x.Get(It.IsAny<int>()));
		}

		[TestMethod]
		public void GuessWithFinalGuessShouldNoteTheEndTime()
		{
			gameMock.NrOfIncorrectGuesses = gameConfig.MaxNrOfGuesses - 1;
			var result = sut.Guess(16, "A") as ViewResult;

			Assert.IsNotNull(sut.CurrentGame.EndTime);
			gameRepositoryMock.Verify(x => x.Update(It.IsAny<GameModel>()));
		}

		[TestMethod]
		public void GuessWithMaxNrOfGuessedReachedShouldShowPageWithMessage()
		{
			gameMock.NrOfIncorrectGuesses = gameConfig.MaxNrOfGuesses;
			var result = sut.Guess(16, "A") as ViewResult;

			Assert.AreEqual(1, result.ViewData.ModelState.Count);
			gameRepositoryMock.Verify(x => x.Update(It.IsAny<GameModel>()), Times.Never());
		}

		[TestMethod]
		public void GuessWithLowercaseLetterShouldMatchWithWord()
		{
			gameMock.WordToGuess.Word = "TEST now";
			sut.Guess(404, "e");
			sut.Guess(404, "W");

			Assert.AreEqual(0, sut.CurrentGame.NrOfIncorrectGuesses);
			Assert.AreEqual(2, sut.CurrentGame.GuessedLetters.Count);
			gameRepositoryMock.Verify(x => x.Update(It.IsAny<GameModel>()));
		}

		[TestMethod]
		public void GuessWithAlreadyGuessedIncorrectLetterShouldNotCountAsIncorrectAndLetTheUserKnow()
		{
			gameMock.WordToGuess.Word = "T n";
			sut.Guess(2832, "Q");
			sut.Guess(2832, "Q");

			Assert.AreEqual(1, sut.CurrentGame.NrOfIncorrectGuesses);
			Assert.AreEqual(1, sut.CurrentGame.GuessedLetters.Count);
			gameRepositoryMock.Verify(x => x.Update(It.IsAny<GameModel>()));
		}

		[TestMethod]
		public void GuessWithLastCorrectGuessShouldMarkWordAsGuessed()
		{
			gameMock.WordToGuess.Word = "Test";
			sut.Guess(987, "T");
			sut.Guess(987, "E");
			sut.Guess(987, "S");

			Assert.AreEqual(true, sut.CurrentGame.WordGuessed);
			Assert.IsNotNull(sut.CurrentGame.EndTime);
			gameRepositoryMock.Verify(x => x.Update(It.IsAny<GameModel>()));
		}

		[TestMethod]
		public void GuessShouldIgnoreSpacesWhenTryingToGuessTheWord()
		{
			gameMock.WordToGuess.Word = "T n";
			sut.Guess(55, "T");
			sut.Guess(55, "N");

			Assert.AreEqual(true, sut.CurrentGame.WordGuessed);
			Assert.IsNotNull(sut.CurrentGame.EndTime);
			gameRepositoryMock.Verify(x => x.Update(It.IsAny<GameModel>()));
		}
	}
}
