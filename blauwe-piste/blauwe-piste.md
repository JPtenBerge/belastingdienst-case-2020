# Blauwe piste

## Blok 1: Programming essentials

Maak een webapplicatie met ASP.NET Core om [Galgje](https://www.galgje.com/) te spelen.

* Schrijf unittests die de werking van het spel controleren.
* De server houdt de state bij. Dus iedere lettergok wordt naar de server gecommuniceerd.
* Het resultaat van het spel hoort duidelijk aangegeven te worden.
* Het spel moet gereset te kunnen worden.
* Er mag nog geen JavaScript gebruikt worden.

## Blok 2: Developing Databases and XML

Gebruik een database om high scores en statistieken van het spel op te slaan.

* Zet EF Core in om de database te ontsluiten.
* Voor het aanmaken van de database mogen migrations gebruikt worden, maar de database mag ook met de hand worden aangemaakt.
* Hou de volgende statistieken bij over de laatste 10 gespeelde potjes:
  * Hoeveel foute letters worden er gegokt
  * Hoelang men erover doet om een woord te raden
* Maak een pagina waarop te zien is welke speler het meeste aantal woorden goed heeft geraden en wie de beste ratio heeft (geraden vs niet geraden)
* Haal het te raden woord middels een stored procedure op uit de database. Gebruik ook hier EF Core.

Tijd over?

* Controleer met SQL Server Extended Events of de gegenereerde queries van EF Core efficiënt zijn. Denk hierbij aan:
  * Navigation properties die per ongeluk niet geïnclude zijn, waardoor er per entity een query wordt uitgevoerd
  * Queries die te veel data ophalen met onnodige joins of onnodig veel kolommen in de resultset
  * Filteren/groeperen wat per ongeluk in .NET Core wordt gedaan in plaats van de database
