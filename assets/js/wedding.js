
function repositionRsvpButton() {
  var afterPhoto = document.getElementsByClassName("after-photo");
  var photo = document.getElementsByClassName("photo");

  if (afterPhoto.length && photo.length) {
    afterPhoto[0].style.marginTop = (photo[0].height + 60) + "px";
  }
}

window.addEventListener("load", function() {
  var menuButton = document.getElementById("mobile-nav-container");
  menuButton.onclick = function() {
    menuButton.classList.toggle("menu-active");
  };
  repositionRsvpButton();
});

window.addEventListener("resize", function() {
  repositionRsvpButton();
});
