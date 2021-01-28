## Lab 11 - Promises

Your server hosts a set of files. The first file contains the title of a story and the urls of all the chapters, in a json format. The other files contain the title and the content of each chapter of the story.  

1.	You want to:
	* Indicate that your page is loading the story.
	* Fetch the JSON file for the story.
	* Add title of the story to the page.
	* Start fetching each chapter as fast as possible (in parallel instead of sequentially).
	* Add each chapter of the story to the page as fast as possible, sequentially in the correct order (you don't want chapter 3 to be shown before chapter 2).
	* Indicate that the loading has finished.  

The file of the story has the following format:  

```javascript
{
  "title": "Welcome to Promiseland",
  "chapterUrls": [
    "./Foreword.json",
    "./Introduction.json",
    "./Chapter1.json",
    "./Chapter2.json",
    "./Chapter3.json",
  ]
}
```

The other files have the following format:

```javascript
{
  "title": "chapter 1",
  "content": "Once upon a time, a promise was made."
}  
```

<details><summary>Note</summary>
<ul>
<li>If you use Chrome, FireFox or Edge you don't need to Babelify your code.</li>
<li>If you want to use async / await, you need to use Babel with babel-polyfill and the stage-3 preset</li>
</ul>
</details> 
