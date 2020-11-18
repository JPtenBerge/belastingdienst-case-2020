using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hangman.Models
{
	public class StatisticsModel
	{
		public double? AverageTimeToSolve { get; set; }

		public double? AverageNumberOfWrongGuesses { get; set; }

		public IEnumerable<GameModel> Games { get; set; }
	}
}
