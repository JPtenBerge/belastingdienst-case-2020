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
