using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hangman.Services
{
	public class GameDictionary : IGameDictionary
	{
		private static Random rand = new Random();

		public string GetRandomWord()
		{
			var words = new string[]
			{
				"Minimumtemperaturen",
				"Plantaardig",
				"Computermuis",
				"Telefoon",
				"Chihuahua",
				"YouTube",
				"Quasimodo"
			};
			return words[rand.Next(0, 7)];
		}
	}
}
