var mymap = L.map('mapid').setView([-6.175110, 106.865036], 1);     

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'YOUR_ACCESS_TOKEN'  //'ENTER YOUR ACCESS TOKEN FROM MAPBOX HERE'
}).addTo(mymap);

var iconMarker = L.icon({
	iconUrl: 'static/images/red_MarkerT.png'
});

var source = new EventSource('/topic/twitterdata');

source.addEventListener('message', function(e){
    obj = JSON.parse(e.data);
    console.log(obj);
    lat = obj.place.bounding_box.coordinates[0][0][1];
    long = obj.place.bounding_box.coordinates[0][0][0];
    username = obj.user.name;
    tweet = obj.text;

    marker = L.marker([lat,long]).addTo(mymap).bindPopup('Username: <strong>' + username + '</strong><br>Tweet: <strong>' + tweet + '</strong>');
//	marker = L.marker([lat,long], {icon: iconMarker}).addTo(mymap).bindPopup('Username: <strong>' + username + '</strong><br>Tweet: <strong>' + tweet + '</strong>');
	
}, false);
