'use strict';



/**
 * MOBILE NAVBAR TOGGLE
 */

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".nav-toggle-btn").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".navbar").classList.toggle("active");
  });
});