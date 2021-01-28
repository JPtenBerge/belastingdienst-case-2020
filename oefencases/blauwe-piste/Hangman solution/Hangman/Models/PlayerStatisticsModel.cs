using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hangman.Models
{
	public class PlayerStatisticsModel
	{
		public PlayerModel Player { get; set; }

		public double WinPercentage { get; set; }

		public int NrOfSolvedGames { get; set; }
	}
}
