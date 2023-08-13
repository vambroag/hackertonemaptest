let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(37.559196356896, 126.97736606652),
    zoom: 14,
    mapId: '31889289191ab1d3'
  });

  const iconBase =
    "../img/mapmarkerimg/";
  const icons = {
    meat: {
      icon: iconBase + "축산.png",
    },
    fish: {
      icon: iconBase + "수산.png",
    },
    restaurant: {
      icon: iconBase + "음식.png",
    },
  };
  const features = [
    {
      position: new google.maps.LatLng(37.559349, 126.9773777),
      type: "meat",
    },
    {
      position: new google.maps.LatLng(37.559279, 126.977434),
      type: "meat",
    },
    {
      position: new google.maps.LatLng(37.5592515, 126.9773701),
      type: "meat",
    },
    {
      position: new google.maps.LatLng(37.5592209, 126.9774115),
      type: "meat",
    },
    {
      position: new google.maps.LatLng(37.5590489, 126.9777508),
      type: "meat",
    },
    {
      position: new google.maps.LatLng(37.559114, 126.9774099),
      type: "fish",
    },
    {
      position: new google.maps.LatLng(37.5590981, 126.9774544),
      type: "fish",
    },
    {
      position: new google.maps.LatLng(37.5590159, 126.9775489),
      type: "fish",
    },
    {
      position: new google.maps.LatLng(37.5592445, 126.977774),
      type: "fish",
    },
    {
      position: new google.maps.LatLng(37.5591502, 126.9775453),
      type: "restaurant",
    },
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}

window.initMap = initMap;