// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Mobile menu toggle
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;';
document.querySelector('nav').prepend(menuToggle);

menuToggle.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const fadeInOnScroll = () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // run once at start

// Contact form validation & success message
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simple validation
        let isValid = true;
        this.querySelectorAll('input, textarea').forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ccc';
            }
        });

        if (isValid) {
            alert('✅ Your message has been sent successfully!');
            this.reset();
        } else {
            alert('⚠️ Please fill out all fields before submitting.');
        }
    });
}

// Booking form date minimum = today
const dateInput = document.querySelector('#bookingDate');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}
