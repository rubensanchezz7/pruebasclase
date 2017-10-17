// variables Mapa y Capas
var cities = L.layerGroup();
var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});

// Mapa
var map = L.map('map', { zoomControl:false, layers: [streets, cities] }).
 	setView([37.19001, -3.62543],
 	16);

// Capas gris y distritos
var paradas = L.layerGroup(),
	restaurantes = L.layerGroup(),
	bares = L.layerGroup(),
	cafeterias = L.layerGroup();

var capasBase = {
   	"Gris": grayscale,
 	"Distritos": streets
};
var overlays = {
	"Autobuses": paradas,
	"Restaurantes": restaurantes,
	"Bares": bares,
	"Cafeterías": cafeterias
};
L.control.layers(capasBase, overlays).addTo(map);
	map.dragging.disable(capasBase);
// Establecimientos
var LeafIcon = L.Icon.extend({
   	options: {
        }
});
var bar = new LeafIcon({iconUrl: './imagenes/bar.png'}),
  	restaurante = new LeafIcon({iconUrl: './imagenes/restaurante.png'}),
    	cafeteria = new LeafIcon({iconUrl: './imagenes/cafeteria.png'}),
    	parada = new LeafIcon({iconUrl: './imagenes/autobus.png'});

// Marcadores
L.marker([37.189470, -3.625434],{icon: restaurante}).addTo(restaurantes).bindPopup('<p><h2>Burguer Kabab</h2><img src="./imagenes/kebab.png" width="100" height="100"/></p><hr><p>Valoración: 4,8 <img src="imagenes/estrella.jpeg" width="20" height="20"/></p>'),
L.marker([37.190042, -3.625178],{icon: bar}).addTo(bares).bindPopup('<p><h2>Bar El Gallo</h2><img src="./imagenes/gallo.png" width="100" height="100"/></p><hr><p>Sin valoración.</p>'),
L.marker([37.189700, -3.626201],{icon: bar}).addTo(bares).bindPopup('<p><h2>Deluxe tapas bar granada</h2><img src="./imagenes/deluxe.png" width="100" height="100"/></p><hr><p>Valoración: 3,9 <img src="imagenes/estrella.jpeg" width="20" height="20"/></p>'),
L.marker([37.190100, -3.624891],{icon: cafeteria}).addTo(cafeterias).bindPopup('<p><h2>Cafeteria Churreria ADRIANA</h2><img src="./imagenes/adriana.png" width="100" height="100"/></p><hr><p>Valoración: 4,7 <img src="imagenes/estrella.jpeg" width="20" height="20"/></p>'),
L.marker([37.189964, -3.629997],{icon: cafeteria}).addTo(cafeterias).bindPopup('<p><h2>Café-Bar Casa Perla</h2><img src="./imagenes/perla.png" width="100" height="100"/></p><hr><p>Valoración: 4,6 <img src="imagenes/estrella.jpeg" width="20" height="20"/></p>'),
L.marker([37.191778, -3.624747],{icon: bar}).addTo(bares).bindPopup('<p><h2>Bar Granollers</h2><img src="./imagenes/perla.png" width="100" height="100"/></p><hr><p>Valoración: 4,6 <img src="imagenes/estrella.jpeg" width="20" height="20"/></p>'),
L.marker([37.192323, -3.628253],{icon: bar}).addTo(bares).bindPopup('<p><h2>Cafe-Bar Zeus</h2><img src="./imagenes/zeus.png" width="100" height="100"/></p><hr><p>Valoración: 3,8 <img src="imagenes/estrella.jpeg" width="20" height="20"/></p>'),
L.marker([37.189407, -3.629667],{icon: cafeteria}).addTo(cafeterias).bindPopup('<p><h2>Café-Bar Las Mercedes</h2><img src="./imagenes/mercedes.png" width="100" height="100"/></p><hr><p>Valoración: 4,3 <img src="imagenes/estrella.jpeg" width="20" height="20"/></p>'),
L.marker([37.190648, -3.628219],{icon: cafeteria}).addTo(cafeterias).bindPopup('<p><h2>Cafetería-Bar El Arenal</h2><img src="./imagenes/arenal.png" width="100" height="100"/></p><hr><p>Valoración: 4,1 <img src="imagenes/estrella.jpeg" width="20" height="20"/></p>'),
L.marker([37.189025, -3.623173],{icon: restaurante}).addTo(restaurantes).bindPopup('<p><h2>Mesón-Restaurante "Las Perlas"</h2><img src="./imagenes/lasPerlas.png" width="100" height="100"/></p><hr><p>Valoración: 4,6 <img src="imagenes/estrella.jpeg" width="20" height="20"/></p>'),
L.marker([37.19427, -3.62716], {icon: parada}).addTo(paradas),
L.marker([37.192909, -3.629028], {icon: parada}).addTo(paradas),
L.marker([37.193225, -3.626259], {icon: parada}).addTo(paradas),
L.marker([37.191504, -3.624485], {icon: parada}).addTo(paradas),
L.marker([37.189899, -3.625544], {icon: parada}).addTo(paradas);

// Bloquear zoom
map.scrollWheelZoom.disable();
map.doubleClickZoom.disable();
