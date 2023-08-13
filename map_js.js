function initMap() {
    // The location of Uluru
    const uluru = { lat: 32.1582615544072, lng: 34.89155037133181 };

    // The map, centered at Uluru
    /*const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: uluru,
      disableDefaultUI: true,
    });*/

    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.515, lng: 127.05 },
        zoom: 14,
        mapId: '31889289191ab1d3'
    });

    const rectangle = new google.maps.Rectangle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        bounds: {
            north: uluru.lat - 0.005,
            south: uluru.lat + 0.005,
            west: uluru.lng - 0.005,
            east: uluru.lng + 0.005,
        },
    });

    // The marker, positioned at Uluru
    /*const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });*/
}

window.initMap = initMap;