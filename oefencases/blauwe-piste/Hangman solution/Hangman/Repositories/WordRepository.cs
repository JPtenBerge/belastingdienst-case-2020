using Hangman.DataAccess;
using Hangman.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hangman.Repositories
{
	public class WordRepository : IWordRepository
	{
		private readonly HangmanDbContext context;
		public WordRepository(HangmanDbContext context)
		{
			this.context = context;
		}

		public WordModel GetRandomWord()
		{
			return context.Words.FromSqlRaw("SELECT * FROM getRandomWordView").Single();
		}
	}
}
