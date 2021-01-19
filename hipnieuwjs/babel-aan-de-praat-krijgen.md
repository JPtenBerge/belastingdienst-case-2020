# Babel aan de praat krijgen:

1. Installeer Node.js & npm: https://nodejs.org/en/
2. Open een cmd/terminal in je projectfolder
3. Richt projectfolder in als npm project (maak package.json)
   ```sh
   npm init [enter] [enter] [enter] [enter] ... [enter]
   ```
4. Installeer babel dependencies
   ```sh
   npm install @babel/cli @babel/core @babel/preset-env
   ```
5. Maak babel configuratiebestand aan: babel.config.json
   ```json
   {
      "presets": ["@babel/preset-env"]
   }
   ```
6. Voeg buildscript toe aan je package.json
   ```json
   "scripts": {
      "build": "babel src -d dist",
   },
   ```
7. Maak een mapje `src` aan en plaats daarin interessante bestanden. Het bestand van de block-bindings-oefening bijv.
8. `npm run build`