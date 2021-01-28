using Hangman.Models;
using System.Collections.Generic;

namespace Hangman.Repositories
{
	public interface IPlayerRepository
	{
		IEnumerable<PlayerModel> Query();
		PlayerModel GetOrCreatePlayerByName(string name);
	}
}