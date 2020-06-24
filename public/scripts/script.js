var mymap = L.map('worldmap',{center: [48.866667, 2.333333], zoom: 4});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);


var customIcon = L.icon({
    iconUrl: '/images/leaf-green.png',
    shadowUrl: '/images/leaf-shadow.png',
    iconSize:     [38, 95],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],  
    popupAnchor:  [-3, -76]
});

$('.citylist').each(
    function() {
        var coordCities = [$(this).data("lat"), $(this).data("lon")];
        var marker = L.marker(coordCities, {icon: customIcon}).addTo(mymap);
        marker.bindPopup($(this).data("name"));

    }
);   

