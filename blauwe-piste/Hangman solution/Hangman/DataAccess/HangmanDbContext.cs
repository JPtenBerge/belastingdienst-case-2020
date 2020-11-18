using Hangman.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hangman.DataAccess
{
	public class HangmanDbContext : DbContext
	{
		public DbSet<GameModel> Games { get; set; }
		
		public DbSet<GuessedLetterModel> GuessedLetters { get; set; }
		
		public DbSet<WordModel> Words { get; set; }

		public DbSet<PlayerModel> Players { get; set; }

		public HangmanDbContext(DbContextOptions options) : base(options)
		{

		}
	}
}
