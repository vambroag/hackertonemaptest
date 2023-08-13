let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(37.559196356896, 126.97736606652),
    zoom: 14,
    mapId: '31889289191ab1d3'
  });

  const meat = document.createElement("img");

  meat.src =
    "./testmapmarkerimg/축산.png";

  const fish = document.createElement("img");

  fish.src =
    "./testmapmarkerimg/수산.png";

  const restaurant = document.createElement("img");

  restaurant.src =
    "./testmapmarkerimg/음식.png";

  const features = [
    {
      position: new google.maps.LatLng(37.559349, 126.9773777),
      content: meat,
    },
    {
      position: new google.maps.LatLng(37.559279, 126.977434),
      content: meat,
    },
    {
      position: new google.maps.LatLng(37.5592515, 126.9773701),
      content: meat,
    },
    {
      position: new google.maps.LatLng(37.5592209, 126.9774115),
      content: meat,
    },
    {
      position: new google.maps.LatLng(37.5590489, 126.9777508),
      content: meat,
    },
    {
      position: new google.maps.LatLng(37.559114, 126.9774099),
      content: fish,
    },
    {
      position: new google.maps.LatLng(37.5590981, 126.9774544),
      content: fish,
    },
    {
      position: new google.maps.LatLng(37.5590159, 126.9775489),
      content: fish,
    },
    {
      position: new google.maps.LatLng(37.5592445, 126.977774),
      content: fish,
    },
    {
      position: new google.maps.LatLng(37.5591502, 126.9775453),
      content: restaurant,
    },
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: features[i].icon,
      map: map,
    });
  }
}

window.initMap = initMap;