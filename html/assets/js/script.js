'use strict';

// Elementos del DOM
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

// Función para cerrar el menú
const closeMenu = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

// Toggle de la navegación
navToggler?.addEventListener("click", function (e) {
  e.stopPropagation();
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

// Cerrar menú al hacer clic fuera
document.addEventListener("click", function (e) {
  if (navbar && navToggler && !navbar.contains(e.target) && !navToggler.contains(e.target)) {
    closeMenu();
  }
});

// Cerrar menú al hacer clic en un enlace
navbar?.querySelectorAll('.navbar-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Cerrar menú al presionar la tecla Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && navbar?.classList.contains('active')) {
    closeMenu();
  }
});