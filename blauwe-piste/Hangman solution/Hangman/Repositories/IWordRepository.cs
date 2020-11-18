using Hangman.Models;

namespace Hangman.Repositories
{
	public interface IWordRepository
	{
		WordModel GetRandomWord();
	}
}