const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 60)
})

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle("open");
}

// Show scroll up
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")
    // when the scroll is higher than 350 viewport height, and the show-scroll class to
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
