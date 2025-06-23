const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

navbarToggle.addEventListener('click', function () {
    navbarLinks.classList.toggle('open');
    navbarToggle.classList.toggle('open');
});

navbarLinks.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navbarLinks.classList.remove('open');
            navbarToggle.classList.remove('open');
        }
    })
);