## Lab 1 – Setup

1. Install browser

	* Install the Google Chrome browser (recommended) on your machine (if not already there) and make it your default browser.
	* Visit http://nodejs.org and download & install Node.js

1. Setup the project
	* Go to your project directory and initialize Node:
		```bash
		npm init
		```

		This will prompt you to answer a few small questions regarding your project. The default values are fine for now.
	* Install gulp-cli globally
		```bash
		npm install --global gulp-cli
		```
	* Install gulp locally
		```bash
		npm install gulp --save-dev
		```
	* To make running gulp a bit easier, we'll add an entry to the `scripts` object in the `project.json`:
		```json
		"scripts": {
			"start": "gulp"
		},
		```
	* In a minute, we'll create a script to uses several packages. Let's install them first.
		```bash
		npm install gulp-concat gulp-babel @babel/core @babel/preset-env rimraf --save-dev
		```

1. Create the gulpfile
	* `require()` all the dependencies
	* Define a gulp task `clean` that cleans the `dist` folder using `rimraf`.
	* Define a gulp task `js` that reads in your JavaScript files from a folder `src`, concatenates them and uses `babel` to transpile them and writes them to a `dist` folder.

1. Create some JavaScript files
   In `src/`, create a couple of JavaScript files. These will be used to see whether your `gulp` is working correctly.

1. Run `npm start` to start transpiling with `gulp`. When done, your `dist` folder should contain a production-ready JavaScript file.