window.addEventListener("load", function() {
  var menuButton = document.getElementById("mobile-nav-container");
  menuButton.onclick = function() {
    menuButton.classList.toggle("menu-active");
  };
});
