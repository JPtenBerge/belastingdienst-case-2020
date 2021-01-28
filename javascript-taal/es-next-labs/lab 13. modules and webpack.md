## Lab 13 - Modules and Webpack

1. Copy the solution js file of lab 10 (Classes) to a new directory. If you haven't completed this lab, then use the provided solution file.

2. First make use of ES modules to enhance maintainability and reusability of the logic.
  * Split the file in modules, one class per module (.js file). Ensure that per module all necessary imports and exports are done. As Webpack isn't used in this step, ensure that when importing a module the .js extension is provided as in:  

    ```javascript
    import { App } from './App.js';
    ```

  * Store the testing logic in a separate file index.js (don't forget the imports).
  * Create an .html file from which you refer to index.js via a script tag having the attribute ```type="module"```.
  * Open the .html file via a web server (otherwise ES modules won't work ). In Visual Studio Code you could use the plugin *Live Server* for this.

3. Use Webpack to bundle and minimize all modules. A minimized bundle will download faster.  

  * Create a new folder ```MyProject``` and a subfolder ```src```. 
  * Copy all files generated in the previous step to ```src```.
  * Install and configure Webpack 4:
    * Create a package.json and install the 2 webpack dependencies:
      ```bash
      npm init -y
      npm install webpack webpack-cli --save-dev
      ```
    * Override the scripts entry in  ```package.json```:
      ```bash
      "scripts": {
        "dev": "webpack --mode development --output ./dev/main.js",
        "build": "webpack --mode production"
      }
      ```
    * Run the production task and check the resulting bundle ```dist\main.js```.  
      ```bash
      npm run build
      ```
    * Update the script tag in ```index.html``` to point to main.js.
    * Test the result on *Live Server*, all should look fine.  

4. To transpile ES2015+ code, let's install and configure Babel:  
    * Install 5 dependencies:
      ```bash
      npm install --save-dev babel-loader @babel/core @babel/register @babel/preset-env

      npm install --save @babel/polyfill
      ```
      ```@babel/register``` and ```@babel/polyfill``` are necessary to import the necessary polyfill in the webpack config file.

    * Create the ```.babelrc``` file with:
      ```bash
      {
        "presets": [
          "@babel/preset-env"
        ]
      }
      ```

    * Create a webpack config file so that babel-loader will be used.  
    Because an import statement will be used (ES2015 feature) in the config file, the component ```@babel/register``` will take care of that. The only important thing no to forget is naming the file
    ```webpack.config.babel.js``` instead of ```webpack.config.js```.

      ```bash
      import '@babel/polyfill';

      module.exports = {
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            }
          ]
        }
      };
      ```

    * Run the production task and check the resulting bundle ```dist\main.js```.  
      ```bash
      npm run build
      ```
    * Test the results on the server.