// Simple script to handle form submissions and basic interactivity

// Booking form handler
document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.querySelector("#bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Your booking request has been submitted successfully!");
            bookingForm.reset();
        });
    }

    // Contact form handler
    const contactForm = document.querySelector("#contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Your message has been sent! We will contact you soon.");
            contactForm.reset();
        });
    }

    // Service request button handler
    const serviceButtons = document.querySelectorAll(".service-btn");
    serviceButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert(`You selected: ${this.dataset.service}`);
        });
    });
});
