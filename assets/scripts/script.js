const navDiv = document.getElementById("navbarDiv");
const navBtn = document.getElementById("navbar-toggler");

navBtn.addEventListener("click", toggleNav);

function toggleNav() {
  navDiv.classList.toggle("show-div");
}
