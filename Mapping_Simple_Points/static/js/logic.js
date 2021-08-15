// add console.log to check to see if our code is working
console.log("working");
//create map object with a center and a zoom level
let map = L.map('mapid', {
    center: [
        40.7, -94.5
    ],
    zoom: 4
});

//create tile layer for the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

//add to the layer to the map
streets.addTo(map);

//add marker for Los Angeles, CA
let marker = L.circleMarker([34.0522, -118.2437], {
    radius:300,
    color: "black",
    fillColor: "#ffffa1"
}).addTo(map);