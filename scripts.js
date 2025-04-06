// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themePath = document.getElementById('theme-path');
const htmlElement = document.documentElement;

console.log('Theme Toggle Element:', themeToggle);
console.log('Theme Icon Element:', themeIcon);
console.log('Theme Path Element:', themePath);
console.log('Current Theme:', localStorage.getItem('theme'));
console.log('HTML Classes:', htmlElement.classList);

// Check if theme is already set in localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.classList.add(savedTheme);

// Update the icon based on the current theme
updateThemeIcon(savedTheme === 'dark');

themeToggle.addEventListener('click', () => {
    const isDark = htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
    console.log('Theme toggled:', isDark ? 'dark' : 'light');
    console.log('Body classes:', document.body.classList);
});

function updateThemeIcon(isDark) {
    themePath.setAttribute('d', isDark ? 
        'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' :
        'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
    );
}

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

// Check if Tailwind dark mode classes are working
const testElement = document.createElement('div');
testElement.className = 'bg-white dark:bg-gray-900 p-4';
testElement.textContent = 'Test Element';
document.body.appendChild(testElement);

console.log('Test Element Classes:', testElement.classList);

document.documentElement.classList.toggle('dark')
localStorage.getItem('theme') 