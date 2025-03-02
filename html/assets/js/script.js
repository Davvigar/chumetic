'use strict';

// Elementos del DOM
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

// Toggle de la navegación
navToggler.addEventListener("click", function (e) {
  e.stopPropagation(); // Evitar que el clic se propague al documento
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

// Cerrar menú al hacer clic fuera
document.addEventListener("click", function (e) {
  // Si el clic no fue dentro del navbar y el navbar está activo
  if (!navbar.contains(e.target) && !navToggler.contains(e.target)) {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
  }
});

// Prevenir que los clics dentro del navbar cierren el menú
navbar.addEventListener("click", function (e) {
  e.stopPropagation();
});