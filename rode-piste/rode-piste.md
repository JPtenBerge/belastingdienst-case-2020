# Rode piste

## Blok 1: Programming essentials

Maak een webapplicatie met ASP.NET Core voor een garage-administratiesysteem.

* Werk de user stories uit met verschillende pagina's.
* Maak de webapplicatie enigszins gebruiksvriendelijk met opmaak.
* Op minimaal twee pagina's, implementeer AJAX. Roep daarbij API-controllers aan. Voorbeelden van geschikte situaties:
  * De verschillende tussenstappen bij us01. auto aanbieden voor onderhoud.
  * Het filteren van klanten bij us07. klantoverzicht tonen.
  * Het selecteren van een automerk bij us09. automerken en -types beheren.
* Implementeer errorhandling.
  * Alle exceptions moeten worden gelogd.
  * Alle responses in de 400-range moeten worden gelogd, inclusief URL.
  * Logging moet niet allemaal in één megabestand gedaan worden. Scheid logs per bestand en per functie.
  * Tijdens development moeten exceptions worden getoond. Bij een API-request worden de exceptions naar JSON vertaald.
* Voeg unittests toe die interessante delen test, zoals us01. het aanbieden van een auto voor onderhoud.
* Werk met statische data, geen database.

## Blok 2: Developing Databases and XML

Gebruik een database om de data van het garage-administratiesysteem in op te slaan.

* Zet EF Core in om de database te ontsluiten.
* Voor het aanmaken van de database mogen migrations gebruikt worden, maar de database mag ook met de hand worden aangemaakt. Let erop dat dit complex kan worden als bij de EF Core classes overerving plaatsvindt of meer-op-meer-relaties zijn.
* Gebruik het repository pattern als data access-abstractielaag.
* Gebruik stored procedures voor de CRUD-operaties op onderhoudsopdrachten. Gebruik EF Core om de stored procedures uit te voeren.
* Controleer met SQL Server Extended Events of de gegenereerde queries van EF Core efficiënt zijn. Denk hierbij aan:
  * Navigation properties die per ongeluk niet geïnclude zijn, waardoor er per entity een query wordt uitgevoerd
  * Queries die te veel data ophalen met onnodige joins of onnodig veel kolommen in de resultset
  * Filteren/groeperen wat per ongeluk in .NET Core wordt gedaan in plaats van de database
* Zorg ervoor dat de database niet betrokken is bij het uitvoeren van de unittests.
