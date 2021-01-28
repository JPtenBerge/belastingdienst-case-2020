using HangmanBlazor.Services;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HangmanBlazor.Pages
{
    public partial class Hangman : ComponentBase
    {
        public string WordToGuess { get; set; }

        public int MaxNrOfGuesses { get; set; } = 5;

        public int NrOfIncorrectGuesses { get; set; }

        public List<string> GuessedLetters { get; set; } = new List<string>();

        public string Notification { get; set; }

        public bool WordGuessed { get; set; }

        [Inject]
        public IGameDictionary GameDictionary { get; set; }

        protected override void OnInitialized()
        {
            Reset();
        }

        public void Guess(string letter)
        {
            letter = letter.ToUpper();

            // is it a valid guess? game still going, letter not guessed before?
            if (!IsValidGuess(letter))
            {
                return;
            }

            // if letter isn't in word, then increase the number of incorrect guesses
            if (!WordToGuess.ToUpper().Contains(letter))
            {
                NrOfIncorrectGuesses++;
            }

            GuessedLetters.Add(letter);

            // has the word been solved?
            if (HasWordBeenGuessed())
            {
                WordGuessed = true;
            }
        }

        public void Reset()
        {
            var word = GameDictionary.GetRandomWord(); // get from dictionary
            WordToGuess = word;
            GuessedLetters = new List<string>();
            NrOfIncorrectGuesses = 0;
            Notification = null;
            WordGuessed = false;
        }

        private bool IsValidGuess(string letter)
        {
            if (NrOfIncorrectGuesses == MaxNrOfGuesses)
            {
                Notification = "Helaas, je mag niet meer raden. Het spel zit erop!";
                return false;
            }
            if (GuessedLetters.Contains(letter))
            {
                Notification = $"De letter {letter} heb je al geprobeerd, probeer een andere!";
                return false;
            }
            return true;
        }

        private bool HasWordBeenGuessed()
        {
            // filter out spaces and uppercase it for comparison
            var word = WordToGuess.Replace(" ", "").ToUpper();
            foreach (var letter in word)
            {
                if (!GuessedLetters.Contains(letter.ToString()))
                {
                    return false;
                }
            }

            return true;
        }
    }
}
