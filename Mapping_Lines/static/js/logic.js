// add console.log to check to see if our code is working
console.log("working");
//create map object with a center and a zoom level
let map = L.map('mapid', {
    center: [
      37.6213, -122.3790
    ],
    zoom: 5
});

//create tile layer for the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

//add to the layer to the map
streets.addTo(map);

let cityData = cities;

// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
  color: "yellow"
}).addTo(map);