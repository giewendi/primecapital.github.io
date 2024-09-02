function loadTemplate(id, file) {
    const element = document.getElementById(id);
    if (element) {  // Ensure the element exists before trying to set innerHTML
        fetch(file)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = data;

                // If the header is loaded, attach the hamburger menu event listener
                if (id === "header-placeholder") {
                    const hamburgerIcon = document.querySelector(".hamburger-icon");
                    const navLinks = document.querySelector(".nav-links");

                    if (hamburgerIcon && navLinks) {
                        hamburgerIcon.addEventListener("click", function () {
                            navLinks.classList.toggle("active");
                        });
                    }
                }
            })
            .catch(error => {
                console.error(`Error loading template ${file}:`, error);
            });
    } else {
        console.error(`Element with id '${id}' not found in the DOM.`);
    }
}

// Load header and footer when the document is ready
document.addEventListener("DOMContentLoaded", function() {
    loadTemplate("footer-placeholder", "../templates/footer.html");
    loadTemplate("hero-placeholder", "../templates/hero.html");
    loadTemplate("offers-placeholder", "../templates/offers.html");
    loadTemplate("how-we-help-placeholder", "../templates/how-we-help.html");
    loadTemplate("process-placeholder", "../templates/process.html");
    loadTemplate("testimonial-placeholder", "../templates/testimonial.html");
    loadTemplate("faq-placeholder", "../templates/faq.html");

    // Styles
    loadTemplate("waves-top-placeholder", "../templates/waves-top.html");
    loadTemplate("waves-bottom-placeholder", "../templates/waves-bottom.html");
});