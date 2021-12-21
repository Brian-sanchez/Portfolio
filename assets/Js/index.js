window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav");
    nav.classList.toggle("bajar", window.scrollY>0);
});