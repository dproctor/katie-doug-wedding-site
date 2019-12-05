function markFormAsSubmitted() {
  var form = document.getElementById('rsvp-form');
  if (!form) {
    return;
  }
  form.classList.add('submitted');
}

function makePhotosVisible() {
  var photos = document.querySelectorAll("#photo-container img");
  for (var i=0; i<photos.length; i++) {
    photos[i].style["opacity"] = 1;
  }
}

window.addEventListener('load', function() {
  var menuButton = document.getElementById('mobile-nav-container');
  menuButton.onclick = function() {
    menuButton.classList.toggle('menu-active');
  };
  makePhotosVisible();
});

window.addEventListener('resize', function() {
  repositionRsvpButton();
});
