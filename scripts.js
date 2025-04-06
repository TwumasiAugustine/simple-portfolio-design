// MobileMenu Toggle
const menu_toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');

const toggleMenu = () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
    menu_toggle.classList.toggle('active')
};

menu_toggle.addEventListener('click', toggleMenu);

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Add more animation observers
const slideLeftObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-left');
        }
    });
}, { threshold: 0.1 });

const slideRightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-right');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.slide-left').forEach(el => {
    slideLeftObserver.observe(el);
});

document.querySelectorAll('.slide-right').forEach(el => {
    slideRightObserver.observe(el);
});


// year on footer
const year = new Date().getFullYear();
document.getElementById('year').textContent = year;

