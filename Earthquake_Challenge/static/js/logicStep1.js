// add console.log to check to see if our code is working
console.log("working");

//create tile layer for the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

//create tile layer for the background of our map
let satellitestreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

//create base layer that holds both maps
let baseMap = {
  "Streets": streets,
  "Satellite": satellitestreets
}


//create map object with a center and a zoom level
let map = L.map('mapid', {
    center: [
      39.5, -98.5
    ],
    zoom: 3,
    layers: [streets]
});

//pass our map layers into our layer control and add to map
L.control.layers(baseMap).addTo(map);

//retrieve earthquake GeoJSON data
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  //creating a geojson layer with retrieved data
  L.geoJson(data).addTo(map);
});



