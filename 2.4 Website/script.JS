// Select the hamburger icon and navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation links
    navLinks.classList.toggle('active');
});