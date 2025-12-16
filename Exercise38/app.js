const toggleButton = document.getElementById('toggleBtn');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// // Close menu when clicking a link
// document.querySelectorAll('.navbar-links a').forEach(link => {
//     link.addEventListener('click', () => {
//         navbar.classList.remove('active');
//     });
// });