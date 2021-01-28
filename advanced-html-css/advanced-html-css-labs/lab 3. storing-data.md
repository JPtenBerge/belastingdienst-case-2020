# Lab: Storing data

In this exercise you will modify the "Add trip" page to store the trips in the local storage of the browser. You will then modify the index page to show these trips as well.

## Exercise 1: adding data to the local storage

1. Create a new file `trips.js` in a new folder `scripts`. Reference it in `add-trip.html`.
	```html
	<script src="script/trips.js"></script>
	```
1. Add an event listener for when the form is submitted. Also add a `return false;` to cancel the default form submit.
	```html
	<form onsubmit="addTrip(); return false;">

	</form>
	```
1. In `trips.js`, add the function `addTrip()`.
	```js
	function addTrip() {
		
	}
	```
1. Read out any already added trips from the local storage. Remember, only strings can be stored in the web storage, so we have to parse that to native objects.
	```js
	let trips = [];
	if (localStorage['trips']) {
		trips = JSON.parse(localStorage['trips']);
	}
	```
1. Now we're ready to add more trips to our array. Read out the form values and add it to the array.
	```js
	let newTrip = {
		location: document.querySelector('#input-location').value,
		...
	};
	trips.push(newTrip);
	```
1. And write the array back to the storage. Again, strings only here.
	```js
	localStorage['trips'] = JSON.stringify(trips);
	```

All done! When submitting the form, you should be able to see your data by opening the web developer toolbar in your browser. Local storage data should be viewable there.

## Exercise 2: reading out data

In this exercise, we'll read out the local storage data and use the `template` element to add them one by one to the page.

1. To start, add a `<template>` element with the template for a trip. Technically you can place this anywhere you'd like, but for readability we'll add it immediately inside our `section`.

	```html
	<template id="trip-template">
		<article class="trip">
			<header>
				<h2 class="city"></h2>
				<time></time>
			</header>
			<div class="review"></div>
			<meter min="" max="" high="" low="" optimum="" value=""></meter>
		</article>
	</template>
	```

1. Next, in `trips.js`, add a function `loadTrips()` that reads out the local storage data.

```js
function loadTrips() {
	let trips = JSON.parse(localStorage['trips']);
	let template = document.querySelector('#trip-template').content;

	// ...
}
```

1. Go through all trips and use the template to stamp out an HTML block for every trip. Then, add the HTML block to the page.
	```js
	for (let trip of trips) {
		let newTrip = template.cloneNode(true); // true = deep clone
		newTrip.querySelector('.where').innerText = trip.location;
		// ...
		document.querySelector('#trips').appendChild(newTrip);
	}
	```

1. Lastly, call the `loadTrips()` function
	```js
	loadTrips();
	```

If all went well, the page should now retrieve the added trips every time the page is visited.