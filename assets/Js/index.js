window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav");
    nav.classList.toggle("bajar", window.scrollY>0);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});