using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Hangman.Models
{
	public class GuessedLetterModel
	{
		public int Id { get; set; }

		[Required]
		public string Letter { get; set; }

		public int GameId { get; set; }

		[JsonIgnore]
		public GameModel Game { get; set; }
	}
}
