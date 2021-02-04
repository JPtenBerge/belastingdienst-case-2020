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

Heel veel tijd over?

* Maak een pagina waarbij men zoveel mogelijk woorden moet raden in 2 minuten. Dit aantal telt als de all-time high score.

## Blok 3: Advanced Programming

* Gebruik voor I/O-operaties `async`/`await` waar dit zou moeten.
* Maak een WCF-service die een random woord teruggeeft in XML-formaat. Roep deze service asynchroon aan vanaf de webapplicatie en parse het resultaat.
  * Voor de woordenlijst, op internet kun je hele dictionaries vinden, bijv: http://www.albahari.com/ispell/allwords.txt

    Importeer deze data op asynchrone wijze in je database.
* Implementeer een pay-to-play-model voor je applicatie via een WCF-service. Iedere unieke gebruiker mag 3 keer gratis spelen, daarna moet hij of 5 minuten wachten of betalen voor 3 nieuwe rondes.
  * Implementeer logging en hou via performance counters bij hoeveel load de service te verduren krijgt.
- Tijd over? Besteed wat aandacht aan het verder unittesten van je code, zowel deze opdracht als vorige(n).

## Blok 4: Crypto, Data en OS

Sla alle persoonsgegevens versleuteld op in verband met privacywetgeving (GDPR), zoals de spelernaam en tijdstippen waarop een spel is gestart en beëindigd. Gebruik voor deze versleuteling X509-certificaten.

Tijd over?
* Ga verder met de opdracht van de WCF-services.
* Verbeter je unittests met nieuw verkregen inzichten van de training.

## Blok 5: Front-end Development

* Gebruik JavaScript i.c.m. AJAX om het spel te laten werken. Hierbij kun je voor verschillende opzetten gaan:
  * Iedere lettergok naar de server communiceren via AJAX
  * Het te raden woord via AJAX ophalen van de server, de werking van het spel met JavaScript regelen en alle statistieken en het resultaat opsturen wanneer het spel klaar is

Als je het aandurft, mag je er ook voor kiezen om de voorkant te herbouwen met een lichtgewicht view library als Vue of React. Gebruik hier dan ook gerust TypeScript bij. Het `any` keyword is dan verboden.
