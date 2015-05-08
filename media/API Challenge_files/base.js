var response;

$(document).ready(function(){

  getLaughs();

});

function getLaughs() {
  // Make Api Request
  response = mock_response; // this is hard coded in js/mock_response.js

  // And when the reponse comes back...
  renderGallery(response);
}

function renderGallery(response) {
  var $gallery = $('#gallery');

  // for now, grab just the first response item
  // eventually we'll need to do this in a loop
  var item_data = response.data.children[0].data;

  // let's see what we've got
  console.log("here's the first item in the reddit api response object:",
              item_data);

  // now, let's build the raw html for our item
  var item_html = (
                    "<div class='item'>" +
                      // img here +
                      // title here +
                    "</div>"
                  );

  // and add it to the DOM!
  $gallery.append(item_html);
  $gallery.append(item_html);
  $gallery.append(item_html);
  
}
