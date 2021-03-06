
const toggleMenu = (i) => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open"); 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);

menuButton.addEventListener("click", function() {
  TweenMax.from( ".menu", 2, {left: -100});
});


TweenMax.from( ".header", 2, {top: -100});
TweenMax.from( ".header h1", 2, {scale: 0.5, color: '#388E3C', delay: 2,});