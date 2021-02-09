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
	[Route("api/game/{gameId:int}")]
	[ApiController]
	public class GameApi : ControllerBase
	{
		private IGameRepository gameRepository;
		public GameApi(IGameRepository gameRepository)
		{
			this.gameRepository = gameRepository;
		}

		[HttpGet]
		public GameModel Get(int gameId)
		{
			return gameRepository.Get(gameId);
		}
	}
}
