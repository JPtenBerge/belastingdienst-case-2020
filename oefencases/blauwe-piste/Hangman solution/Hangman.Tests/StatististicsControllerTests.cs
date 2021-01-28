using Hangman.Controllers;
using Hangman.Models;
using Hangman.Repositories;
using Hangman.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Hangman.Tests
{
	[TestClass]
	public class StatisticsControllerTests
	{
		StatisticsController sut;
		Mock<IGameRepository> gameRepositoryMock;
		Mock<IPlayerRepository> playerRepositoryMock;

		[TestInitialize]
		public void Init()
		{
			playerRepositoryMock = new Mock<IPlayerRepository>();

			gameRepositoryMock = new Mock<IGameRepository>();
			gameRepositoryMock.Setup(x => x.QueryLast(It.IsAny<int>())).Returns(new List<GameModel>
			{
				new GameModel { NrOfIncorrectGuesses = 3, WordGuessed = false, StartTime = new DateTime(2018, 7, 15, 15, 14, 40), EndTime = null },
				new GameModel { NrOfIncorrectGuesses = 1, WordGuessed = true, StartTime = new DateTime(2018, 7, 15, 12, 14, 40), EndTime = new DateTime(2018, 7, 15, 12, 21, 59) }, // 7 minutes 19 seconds = 439
				new GameModel { NrOfIncorrectGuesses = 4, WordGuessed = true, StartTime = new DateTime(2018, 7, 16, 10, 14, 40), EndTime = new DateTime(2018, 7, 16, 10, 15, 4) }, // 24 seconds = 24
				new GameModel { NrOfIncorrectGuesses = 5, WordGuessed = true, StartTime = new DateTime(2018, 7, 22, 15, 14, 40), EndTime = new DateTime(2018, 7, 22, 15, 17, 23) }, // 2 minutes 43 seconds = 163
				new GameModel { NrOfIncorrectGuesses = 5, WordGuessed = false, StartTime = new DateTime(2018, 7, 24, 15, 14, 40), EndTime = new DateTime(2018, 7, 24, 15, 17, 47) }, // not guessed
				new GameModel { NrOfIncorrectGuesses = 3, WordGuessed = true, StartTime = new DateTime(2018, 7, 26, 11, 14, 40), EndTime = new DateTime(2018, 7, 26, 15, 34, 0) }, // 4 hours, 19 minutes and 20 seconds = 15560
				new GameModel { NrOfIncorrectGuesses = 1, WordGuessed = true, StartTime = new DateTime(2018, 8, 2, 21, 24, 40), EndTime = new DateTime(2018, 8, 2, 23, 31, 4) }, // 2 hours, 6 minutes and 24 seconds = 7584
			});

			sut = new StatisticsController(gameRepositoryMock.Object, playerRepositoryMock.Object);
		}

		[TestMethod]
		public void LastGamesShouldDetermineTheAverageTimeToSolveWord()
		{
			var result = sut.LastGames() as ViewResult;
			var model = result.Model as StatisticsModel;
			Assert.AreEqual(4754000.0, model.AverageTimeToSolve);
		}

		[TestMethod]
		public void LastGamesShouldDetermineTheAverageNumberOfIncorrectGuessesToSolveWord()
		{
			var result = sut.LastGames() as ViewResult;
			var model = result.Model as StatisticsModel;
			Assert.AreEqual(2.8, model.AverageNumberOfWrongGuesses);
		}

		[TestMethod]
		public void LastGamesShouldHandleNoSolvedGamesGracefully()
		{
			gameRepositoryMock.Setup(x => x.QueryLast(It.IsAny<int>())).Returns(new List<GameModel>
			{
				new GameModel { NrOfIncorrectGuesses = 3, WordGuessed = false, StartTime = new DateTime(2018, 7, 15, 15, 14, 40), EndTime = null },
				new GameModel { NrOfIncorrectGuesses = 1, WordGuessed = false, StartTime = new DateTime(2018, 7, 15, 12, 14, 40), EndTime = null },
				new GameModel { NrOfIncorrectGuesses = 4, WordGuessed = false, StartTime = new DateTime(2018, 7, 16, 10, 14, 40), EndTime = null },
			});
			var result = sut.LastGames() as ViewResult;
			var model = result.Model as StatisticsModel;
			Assert.IsNull(model.AverageNumberOfWrongGuesses);
			Assert.IsNull(model.AverageTimeToSolve);
		}

		[TestMethod]
		public void PlayersShouldDetermineTheWinLossRatio()
		{
			playerRepositoryMock.Setup(x => x.Query()).Returns(new List<PlayerModel>
			{
				new PlayerModel
				{
					Name = "Frank",
					Games = new List<GameModel>
					{
						new GameModel { WordGuessed = true },
						new GameModel { WordGuessed = false },
						new GameModel { WordGuessed = false },
						new GameModel { WordGuessed = true },
						new GameModel { WordGuessed = false },
						new GameModel { WordGuessed = true },
						new GameModel { WordGuessed = true }
					}
				},
				new PlayerModel
				{
					Name = "Laura",
					Games = new List<GameModel>
					{
						new GameModel { WordGuessed = true },
						new GameModel { WordGuessed = false }
					}
				}
			});

			var result = sut.Players() as ViewResult;
			var model = (result.Model as IEnumerable<PlayerStatisticsModel>).ToList();

			Assert.AreEqual("Frank", model[0].Player.Name);
			Assert.AreEqual(4, model[0].NrOfSolvedGames);
			Assert.AreEqual(57.142857, model[0].WinPercentage, 0.00001);
			Assert.AreEqual("Laura", model[1].Player.Name);
			Assert.AreEqual(1, model[1].NrOfSolvedGames);
			Assert.AreEqual(50.0000, model[1].WinPercentage, 0.00001);
		}
	}
}
