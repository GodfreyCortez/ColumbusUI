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
                <input type="text" class="form-control location" placeholder="Location" />
              </div>
              <div class="col">
                <input type="text" class="form-control time" placeholder="Time" />
              </div>
              <div class="col">
                <div class="button" onclick="return deleteRow(this);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0z"/>
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"/>
                    </svg>
                </div>
              </div>
            </div>
`

const optRow = `
            <div class="form-row location-row">
              <div class="col">
                <input type="text" class="form-control optInput location" placeholder="Location" />
              </div>
              <div class="col">
                <div class="button buttonOpt" onclick="return deleteRow(this);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0z"/>
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"/>
                    </svg>
                </div>
              </div>
            </div>
`

$(document).ready(() => {
  $("#req-input-group").append(reqRow)
  $("#opt-input-group").append(optRow)

  $("#req-add").click(() => {
    console.log("clicked req-add")
    $("#req-input-group").append(reqRow)
    return false
  })

  $("#opt-add").click(() => {
    console.log("clicked opt-add")
    $("#opt-input-group").append(optRow)
    return false
  })

  $("#submit").click(() => {
    const destinations = []
    $("#req-input-group").find(".form-row").each(function(i) {
      const loca = $(this).find(".location").val()
      const time = $(this).find(".time").val()
      destinations.push({
        "name": loca,
        "time": time
      })
    })
    const poiNames = []
    $("#opt-input-group").find(".form-row").each(function(i) {
      poiNames.push($(this).find(".location").val())
    })
    const data = { destinations, poiNames }
    console.log(data)
    $.ajax({
      url: "https://columbus-224617.appspot.com//route/generate",
      data: JSON.stringify(data),
      contentType: "application/json",
      type: 'post',
      crossDomain: true
    }).done(data => {
      console.log(`got back: ${data}`)
      $("#columbus-map").attr("src", data)
    }).fail(err => {
      console.log(`failed :( ${err}`)
      console.log(err)
    })
    return false
  })
})

  function deleteRow(element) {
    const row = $(element).parent().parent()
    row.remove()
  return false
}
