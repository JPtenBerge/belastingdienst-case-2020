using Bunit;
using HangmanBlazor.Pages;
using HangmanBlazor.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace HangmanBlazor.Tests
{
    [TestClass]
    public class HangmanPageTest
    {
        Mock<IGameDictionary> gameDictionaryMock;
        IRenderedComponent<Hangman> cutComponent;
        
        public Hangman Cut
        {
            get
            {
                return cutComponent.Instance;
            }
        }

        [TestInitialize]
        public void Init()
        {
            // Because of its simplicity, mocking away this dictionary doesn't do
            // a whole lot at the moment. But suppose the dictionary was to make all
            // kinds of database calls or network requests. Then mocking would prove
            // much more valuable. Right now, it's a matter of principle: We want
            // to isolate the controller for testing here.
            gameDictionaryMock = new Mock<IGameDictionary>();
            gameDictionaryMock.Setup(x => x.GetRandomWord()).Returns("superb");

            // create testcontext for instantiating the blazor page
            var context = new Bunit.TestContext();
            context.Services.AddSingleton(gameDictionaryMock.Object);
            cutComponent = context.RenderComponent<Hangman>();
            Cut.Reset();
        }

        [TestMethod]
        public void IndexShouldInitializeTheGameIfNotStarted()
        {
            Assert.IsNotNull(Cut.WordToGuess);
        }

        //[TestMethod]
        //public void IndexShouldNotReinitializeTheGameOnceStarted()
        //{
        //    Cut.NrOfIncorrectGuesses = 3;
        //    Cut.Index();
        //    Assert.AreEqual(3, Cut.NrOfIncorrectGuesses);
        //}

        //[TestMethod]
        //public void GuessWithNoModelInitializationShouldRedirect()
        //{
        //    GameController.model = null; // reset static field
        //    var result = sut.Guess("A");
        //    Assert.IsInstanceOfType(result, typeof(RedirectToActionResult));
        //}

        [TestMethod]
        public void GuessWithMaxNrOfGuessedReachedShouldShowNotifyUser()
        {
            Cut.NrOfIncorrectGuesses = Cut.MaxNrOfGuesses;
            Cut.Guess("A");

            Assert.IsNotNull(Cut.Notification);
        }

        [TestMethod]
        public void GuessWithLowercaseLetterShouldMatchWithWord()
        {
            Cut.WordToGuess = "TEST now";
            Cut.Guess("e");
            Cut.Guess("W");

            Assert.AreEqual(0, Cut.NrOfIncorrectGuesses);
            Assert.AreEqual(2, Cut.GuessedLetters.Count);
        }

        [TestMethod]
        public void GuessWithAlreadyGuessedIncorrectLetterShouldNotCountAsIncorrectAndLetTheUserKnow()
        {
            Cut.WordToGuess = "T n";
            Cut.Guess("Q");
            Cut.Guess("Q");

            Assert.AreEqual(1, Cut.NrOfIncorrectGuesses);
            Assert.AreEqual(1, Cut.GuessedLetters.Count);
        }

        [TestMethod]
        public void GuessWithLastCorrectGuessShouldMarkWordAsGuessed()
        {
            Cut.WordToGuess = "Test";
            Cut.Guess("T");
            Cut.Guess("E");
            Cut.Guess("S");

            Assert.AreEqual(true, Cut.WordGuessed);
        }

        [TestMethod]
        public void GuessShouldIgnoreSpacesWhenTryingToGuessTheWord()
        {
            Cut.WordToGuess = "T N";
            Cut.Guess("T");
            Cut.Guess("N");

            Assert.AreEqual(true, Cut.WordGuessed);
        }

        [TestMethod]
        public void ResetShouldSetUpNewGame()
        {
            Cut.Guess("A");
            Cut.Guess("B");
            Cut.Guess("C");

            Cut.Reset();

            Assert.AreEqual(0, Cut.NrOfIncorrectGuesses);
            Assert.AreEqual(0, Cut.GuessedLetters.Count);
        }
    }
}
