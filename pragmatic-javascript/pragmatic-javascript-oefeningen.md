# Pragmatic JavaScript-oefeningen

## Oefening 1: maak een Bank-applicatie

- Bank beheert BankAccounts.
- Er zijn verschillende soorten accounts: Checking en Savings.
- Ik wil geld kunnen overmaken van account A naar B.
- Bij een account wil ik een accountant kunnen koppelen. Als er een hoge afschrijving wordt gedaan, dan moet deze accountant op de hoogte worden gebracht.
- Dit alles met TypeScript

```sh
1. npm install typescript --save-dev
2. npx tsc --init
3. Configureer je tsconfig verder af
4. npx tsc
```

---

## Oefening 2: integreer ESLint bij jullie Bankapplicatie

```sh
- npm install --save-dev eslint
- npx eslint --init  => airbnb, google, standard
- npx eslint src/bestand.ts
```

En installeer ook vooral de extensie ESLint voor VS Code.

Uitwerking van de bankoefening staat ook in de Pragmatic JavaScript-folder.

## Oefening 3: unittest jullie bankapplicatie

- Of het transferren van money "correct" gaat
- Of je een foutmeldingen krijgt als je bij een SavingsAccount te veel geld over probeert te maken

Gebruik gerust mocha/chai/sinon:
```sh
npm install ts-mocha mocha chai sinon @types/mocha @types/chai @types/sinon --save-dev
```
en in je package.json:
```json
"scripts": {
  "test": "ts-mocha --paths -p ./tsconfig.json test/**/*.spec.ts"
},
```
Uit te voeren met:
```sh
npm test
```

Maar voel je vrij om andere combinaties erbij te pakken:
- karma/jasmine (krijgen jullie ook nog bij Angular)
- jest

## Oefening 4: integreer code coverage en Stryker in je applicatie

**Code coverage**

```sh
npm install nyc --save-dev
```
En dan `nyc` voor je testcommando plakken.

```json
"scripts": {
  "test": "ts-mocha --paths -p ./tsconfig.json test/**/*.spec.ts",
  "test-with-coverage": "nyc --reporter html ts-mocha --paths -p ./tsconfig.json test/**/*.spec.ts"
},
```

**Stryker**

```sh
npm install --global styker-cli
stryker init
# mogelijk een kleine aanpassing in de config (zie als voorbeeld eventueel mijne)
stryker run
```

Hang je project ook in een git repo. Stryker leest aan de hand van je git-informatie uit welke bestanden er in je project zitten.
