// Initialiser les icônes Lucide
document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();
});

const burgerMenu = document.getElementById("burger-menu");
const navMenu = document.getElementById("nav-menu");

burgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Petit bonus : animation simple des barres du burger
  const spans = burgerMenu.querySelectorAll("span");
  spans[0].style.transform = navMenu.classList.contains("active")
    ? "rotate(45deg) translate(5px, 6px)"
    : "none";
  spans[1].style.opacity = navMenu.classList.contains("active") ? "0" : "1";
  spans[2].style.transform = navMenu.classList.contains("active")
    ? "rotate(-45deg) translate(5px, -6px)"
    : "none";
});
