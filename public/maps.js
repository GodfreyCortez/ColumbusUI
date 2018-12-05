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
                <button class="remove" onclick="deleteRow(this)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0z"/>
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"/>
                    </svg>
                </button>
              </div>
            </div>
`

const optRow = `
            <div class="form-row location-row">
              <div class="col">
                <input type="text" class="form-control" placeholder="Location" class="location"/>
              </div>
              <div class="col">
                <button class="remove">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0z"/>
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"/>
                    </svg>
                </button>
              </div>
            </div>
`

$(document).ready(() => {
  $("#req-input-group").append(reqRow)

  $("#req-add").click(() => {
    console.log("clicked req-add")
    $("#req-input-group").append(reqRow)
  })

  $("#opt-add").click(() => {
    console.log("clicked opt-add")
    $("#opt-input-group").append(optRow)
  })
})

function deleteRow(element) {
  console.log("delet!")
  console.log(element)
  console.log($(element).parent())
}
