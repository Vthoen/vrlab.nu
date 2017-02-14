function initMap() {
  var home = {lat: 52.0182545, lng: 4.2067462};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: home,
    disableDefaultUI: true,
    scrollwheel: false,
    styles: [{
      stylers: [{ saturation: -30 }]
    }]
  });
  var marker = new google.maps.Marker({
    position: home,
    map: map
  });
}
