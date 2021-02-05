using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Hangman.Models
{
	public class PlayerModel
	{
		public int Id { get; set; }

		[Required]
		public string Name { get; set; }

		[JsonIgnore]
		public List<GameModel> Games { get; set; }
	}
}
