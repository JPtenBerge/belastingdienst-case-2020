using Hangman.DataAccess;
using Hangman.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hangman.Repositories
{
	public class GameRepository : IGameRepository
	{
		private readonly HangmanDbContext context;
		public GameRepository(HangmanDbContext context)
		{
			this.context = context;
		}

		public IEnumerable<GameModel> Query()
		{
			return GetAll().ToList();
		}

		public IEnumerable<GameModel> QueryLast(int n)
		{
			return GetAll().OrderByDescending(x => x.Id).Take(n).ToList();
		}

		public GameModel Get(int id)
		{
			return GetAll().Single(x => x.Id == id);
		}

		private IQueryable<GameModel> GetAll()
		{
			return context.Games
				.Include(x => x.WordToGuess)
				.Include(x => x.Player)
				.Include(x => x.GuessedLetters);
		}

		public void Add(GameModel newGame)
		{
			context.Games.Add(newGame);
			context.SaveChanges();
		}

		public void Update(GameModel game)
		{
			// changes have been made to the model, model has been retrieved from database,
			// so EF Core is tracking the changes and we only need to persist
			context.SaveChanges();
		}
	}
}
