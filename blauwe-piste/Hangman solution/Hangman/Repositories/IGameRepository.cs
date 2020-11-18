using Hangman.Models;
using System.Collections.Generic;

namespace Hangman.Repositories
{
	public interface IGameRepository
	{
		IEnumerable<GameModel> Query();
		IEnumerable<GameModel> QueryLast(int n);
		GameModel Get(int id);
		void Add(GameModel newGame);
		void Update(GameModel game);
	}
}