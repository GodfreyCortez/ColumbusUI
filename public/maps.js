let map
function initMap () {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 43.653225, lng: -79.383186},
      zoom: 15
    })
}
const optRow = `
`

const reqRow = `
`
$(document).ready(() => {
  $("#opt-add").click(() => {
    console.log("clicked opt-add")
    $("#opt-input-group").append(
    `<input type="text" placeholder="location" class="form-control"/>
      <button>Delete -</button>`
  )
  })
})
