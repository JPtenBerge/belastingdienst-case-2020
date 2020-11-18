using Hangman.DataAccess;
using Hangman.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hangman.Repositories
{
	public class PlayerRepository : IPlayerRepository
	{
		private readonly HangmanDbContext context;
		public PlayerRepository(HangmanDbContext context)
		{
			this.context = context;
		}

		public IEnumerable<PlayerModel> Query()
		{
			return context.Players.Include(x => x.Games).ToList();
		}

		public PlayerModel GetOrCreatePlayerByName(string name)
		{
			var player = context.Players.SingleOrDefault(x => x.Name == name);
			if (player == null)
			{
				player = new PlayerModel { Name = name };
				context.Players.Add(player);
				context.SaveChanges();
			}
			return player;
		}
	}
}
