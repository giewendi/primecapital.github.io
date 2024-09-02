document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const navLinks = document.querySelector(".nav-links");
    const fullnav = document.querySelector('.full-navbar');
    const logo = document.querySelector('.navbar-logo');

    // Check if elements exist before adding event listeners
    if (hamburgerIcon && navLinks) {
        hamburgerIcon.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    } else {
        console.warn("Elements for hamburger icon or nav links not found.");
    }

    // Ensure fullnav exists before adding scroll event listener
    if (fullnav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 0 && window.scrollY < 500) {
                fullnav.classList.remove('fadeout');
                fullnav.classList.add('scroll');
                logo.src = "./resources/media/name-logo-light.png";
            } else if (window.scrollY === 0) {
                fullnav.classList.remove('fadeout');
                fullnav.classList.remove('scroll');
                logo.src = "./resources/media/name-logo.png";
            } else {
                fullnav.classList.add('fadeout');
                logo.src = "./resources/media/name-logo.png";
            }
        });
    } else {
        console.warn("Full navbar element not found.");
    }
});
