# Info Support
# Developing Web Applications using HTML and CSS

## Lab 3 - Exercise 4 - You are here (using Google Map API)

---

This lab builds on the work done during **Lab 3** - **Exercise 3**.

---

In this exercise you'll use the **Geolocation API** to retrieve coordinates (latitude and longitude) of your current location.
To plot this data on a map there are several options. In this exercise we choose to use the **Google Maps API** (which medio 2018 will need a key). In the logic below we'll use an older version of the API which doesn't require a key. Up to date documentation on this API can be found here:

https://developers.google.com/maps/documentation/javascript/tutorial?hl=nl


1. In *index.html* just above the footer add a ```<div>``` element where the map can be loaded into:

    ```html
    <hr>  <!-- add this -->
    <div id="map" style="height: 300px;"></div>  <!-- add this -->

    <footer>
      <span id="author">Waldo</span>
    ```

2. In *trips.js* add a function ```displayLocation()``` that determines the current location of the user.
Also add the two callback functions, one for success and one for failure.

    ```javascript
    function displayLocation() {
      // Retrieve current location
      navigator.geolocation.getCurrentPosition(success, failure);
    }

    function success(position) {

    }

    function failure(error) {

    }
    ```

3. If something went wrong with retrieving the user's location (i.e. no permission) an error should be shown. Add the following code to the ```failure()``` function.

    ```javascript
    function failure(error) {
      console.error('error occurred: ', error);

      switch (error.code) {
        case error.TIMEOUT:
          alert('A timeout occurred.');
          break;
        case error.UNKNOWN_ERROR:
          alert('Unknown error.');
          break;
        case error.POSITION_UNAVAILABLE:
          alert('Unavailable.');
          break;
        case error.PERMISSION_DENIED:
          alert('Permission denied.');
          break;
        default:
          alert('Really unknown error occurred, check log.')
          break;
      }
    }
    ```

5. If locating the user succeeded, then the coordinates can be determined. Show the position in the console and already fill 2 variabeles which we'll use in the next step.

    ```javascript
    function success(position) {
      console.log('position: ', position);

      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
    }
    ```

6. Include the next reference in *index.html*:

    ```html
    <head>
      <title>My Trips</title>
      <!-- ... -->
      <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
    </head>
    ```

7. To display the coordinates on the map add the next code to the success callback function.
    
    ```javascript
    function success(position) {
      console.log('position: ', position);

      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      /* add logic below */
      let positionOnMap = new google.maps.LatLng(latitude, longitude);

      let options = {
          zoom: 13,
          center: positionOnMap,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      let map = new google.maps.Map(document.querySelector('#map'), options);
      let marker = new google.maps.Marker({ position: positionOnMap });
      marker.setMap(map);
    }
    ```

8. Finally, call the ```displayLocation()``` function from within *index.html*.

    ```javascript
    loadTrips();
    displayLocation();
    ```

    When viewing the page, your permission should be asked for sharing your location with the website. When granting this permission a map should be displayed with a (fairly) accurate pinpointed location. When denying this permission an alert message should be shown.