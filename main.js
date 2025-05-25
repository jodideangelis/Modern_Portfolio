// Theme
function theme() {
  const element = document.body;

  element.classList.toggle("dark-mode");
}

// Menu
function menuToggle() {
  const menuBtn = document.getElementById("hamburger");
  const menu = document.getElementById("hamburger-menu");

  menuBtn.classList.toggle("open");
  menu.classList.toggle("open-menu");
}
