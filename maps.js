let map
function initMap () {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 43.653225, lng: -79.383186},
      zoom: 15
    })
}