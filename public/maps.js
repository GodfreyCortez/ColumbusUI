let map
function initMap () {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 43.653225, lng: -79.383186},
      zoom: 15
    })
}

const reqRow = `
            <div class="form-row location-row">
              <div class="col">
                <input type="text" class="form-control" placeholder="Location" class="location"/>
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Time" />
              </div>
              <div class="col">
                <button type="submit" class="Remove -">Remove</button>
              </div>
            </div>
`

const optRow = `
            <div class="form-row location-row">
              <div class="col">
                <input type="text" class="form-control" placeholder="Location" class="location"/>
              </div>
              <div class="col">
                <button type="submit" class="remove">Remove -</button>
              </div>
            </div>
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
