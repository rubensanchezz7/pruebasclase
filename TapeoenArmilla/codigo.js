var map = L.map('map', { zoomControl:false }).setView([37.144229, -3.622781], 15);
map.dragging.disable();
map.scrollWheelZoom.disable();
map.doubleClickZoom.disable();
mapLink =
        '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
        }).addTo(map);

/* Funciones de las capas */
function OtroMapa(){
	/* Esta es la capa de pintura */
	var tiles = new
		L.tileLayer(
			'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png')
			.addTo(map);
}
function MapaPrincipal(){
	/* Esta es la capa de carreteras */
	L.tileLayer(
        	'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        	attribution: '&copy; ' + mapLink + ' Contributors',
        	maxZoom: 18,
        	}).addTo(map);
}

/*	      */

var LeafIcon = L.Icon.extend({
		options: {
			iconSize:     [20, 20],/*Estas son las propedades del icono*/
			popupAnchor:  [-3, -30]
		}
	});
var LeafIcon1 = L.Icon.extend({
                options: {
                        iconSize:     [35, 35],/*Estas son las propedades del icono*/
                        popupAnchor:  [-3, -30]
                }
        });
var Restaurante = L.Icon.extend({
		options: {
			iconSize:     [20, 20],
			popupAnchor:  [-3, -30]
		}
	});

	var marcador = new LeafIcon({iconUrl: 'imagenes/cerveza.png'}); /*creamo la variable marcador que es un nuevo objeto de LeafIcon */
	var metro = new LeafIcon1({iconUrl: 'imagenes/metro.png'});
	var restaurante = new Restaurante({iconUrl: 'imagenes/restaurante.png'});

	L.marker([37.1432893, -3.6301321], {icon: marcador}).bindPopup('<p>Cerveceria jamoneria el Asadero</p><p align="center"><img align="center" height="70px" width="70px" src="imagenes/secadero.jpg"</p>').addTo(map); /* Añade el marcador con nombre "icono al mapa,coon las coordenadas que queremos*/
	L.marker([37.144958,-3.626471], {icon: marcador}).bindPopup('<p>Bar Boulevard 45</p><p align="center"><img align="center" height="70px" width="70px" src="imagenes/45.png"</p>').addTo(map); 
	L.marker([37.1438791,-3.6233805], {icon: marcador}).bindPopup('<p>Meson Bar La Bota</p><p align="center"><img align="center" height="70px" width="70px" src="imagenes/mesonbota.jpg"</p>').addTo(map);
	L.marker([37.137147,-3.628093], {icon: marcador}).bindPopup('<p>Bar Alameda</p><p align="center"><img align="center" height="70px" width="70px" src="imagenes/quinto.jpg"</p>').addTo(map);
	L.marker([37.1432594,-3.6265424], {icon: marcador}).bindPopup('<p>Bar El Rubio</p><p align="center"><img align="center" height="70px" width="70px" src="imagenes/elrubio.jpg"</p>').addTo(map);

	/*Añadir lineas de metro y paradas de buses*/
	L.marker([37.1439416,-3.6140823], {icon: metro}).bindPopup('<p>PARADA SIERRA NEVADA</p><p align="center">').addTo(map);
	L.marker([37.1476162,-3.6209161], {icon: metro}).bindPopup('<p>PARADA FERNANDO DE LOS RIOS</p>').addTo(map);
	L.marker([37.1436151,-3.6275123], {icon: metro}).bindPopup('<p>PARADA ARMILLA</p>').addTo(map);


	L.marker([37.141217, -3.627584], {icon: restaurante}).bindPopup("Pizzeria Voy Volando<img width='50%' src='imagenes/voy.jpg'></img><br/>15€<br/>(4,2)").addTo(map);
	L.marker([37.140002, -3.628696], {icon: restaurante}).bindPopup("Jinou Restaurante <img width='50%' src='imagenes/jinou.jpg'></img><br/>15€<br/>(4,0)").addTo(map);
	L.marker([37.141878, -3.619252], {icon: restaurante}).bindPopup("La Abuela Pepa <img width='50%' src='imagenes/abuela.jpg'></img><br/>10-50€<br/>(4,2)").addTo(map);
	L.marker([37.142550, -3.620231], {icon: restaurante}).bindPopup("Bar los Pepes <img width='50%' src='imagenes/pepes.jpg'></img><br/><br/>(3,9)").addTo(map);
	L.marker([37.139192, -3.623105], {icon: restaurante}).bindPopup("Asadero Don Pollo <img width='50%' src='imagenes/don.jpg'></img><br/>8€<br/>(4,2)").addTo(map);
