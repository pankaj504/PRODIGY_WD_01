window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "blue"; // Change background color when scrolled
  } else {
    navbar.style.backgroundColor = "black"; // Change back to original color
  }
});
