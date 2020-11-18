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
	public class StatisticsController : Controller
	{
		private readonly IGameRepository gameRepository;
		private readonly IPlayerRepository playerRepository;
		public StatisticsController(IGameRepository gameRepository, IPlayerRepository playerRepository)
		{
			this.gameRepository = gameRepository;
			this.playerRepository = playerRepository;
		}

		public IActionResult Index()
		{
			return View();
		}

		[Route("statistics/last-games")]
		public IActionResult LastGames()
		{
			var games = gameRepository.QueryLast(10);
			var solvedGames = games.Where(x => x.WordGuessed);

			var model = new StatisticsModel { Games = games };
			if (solvedGames.Count() > 0)
			{
				model.AverageTimeToSolve = solvedGames
					.Average(x => (x.EndTime.Value - x.StartTime).TotalMilliseconds);
				model.AverageNumberOfWrongGuesses = solvedGames
					.Average(x => x.NrOfIncorrectGuesses);
			}
			return View(model);
		}

		[Route("statistics/players")]
		public IActionResult Players()
		{
			var players = playerRepository.Query();

			var stats = players.Select(p =>
			{
				var nrOfGames = p.Games.Count();
				var nrOfSolvedGames = p.Games.Count(x => x.WordGuessed);

				return new PlayerStatisticsModel
				{
					Player = p,
					NrOfSolvedGames = nrOfSolvedGames,
					WinPercentage = (double)nrOfSolvedGames / nrOfGames * 100.0
				};
			});

			return View(stats);
		}
	}
}
