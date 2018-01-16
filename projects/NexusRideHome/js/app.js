import "../css/app.scss";

// toggle nav-bar
function toggleNav() {
  this.classList.toggle("active");
}
// toggle menu
document.querySelector(".toggle").addEventListener("click", toggleNav);
