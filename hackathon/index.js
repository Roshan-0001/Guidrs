
// Initialize the map
var mymap = L.map('mapid').setView([28.4315466,77.0730292], 13);

// Add a base tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(mymap);

// Add a marker
// var marker = L.marker([28.644800, 77.216721]).addTo(mymap);
var marker = L.marker([28.4697488,77.0635993]).addTo(mymap);
var marker = L.marker([28.5020386,77.0406439]).addTo(mymap);
var marker = L.marker([28.4315466,77.0730292]).addTo(mymap);

// Add a popup to the marker
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");



document.getElementById('searchForm').addEventListener('submit', function(event) {
event.preventDefault();

const query = document.getElementById('searchInput').value;
const cx = '5432ad76083c94515'; // Replace with your Search Engine ID
const apiKey = '7cf1f1cbfb23d6945ed10635bc144515'; // Replace with your API key

const url = `https://cse.google.com/cse.js?cx=5432ad76083c94515`;

fetch(url)
.then(response => response.json())
.then(data => {
    // Process the data (e.g., display results on your website)
    console.log(data);
})
.catch(error => console.error('Error:', error));
});

// Add a circle
// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

// // Add a polygon
// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);