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

// progress up
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progresss-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })
    scrollProgress.style.background = `conic-gradient(#b15e05 ${scrollValue}%, #2e2d2d ${scrollValue}%)`
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// dropdowns of appointment section
const assessmentDropdowns = document.querySelectorAll('.dropdown');

document.body.addEventListener('click', (event) => {
    assessmentDropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.menu');
        const svg = dropdown.querySelector('.svg-img');

        if (!dropdown.contains(event.target)) {
            menu.classList.remove('menu-open');
            svg.classList.remove('svg-img-rotate');
        }
    });
});

assessmentDropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');
    const svg = dropdown.querySelector('.svg-img');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event propagation to document body

        // Close other dropdowns
        assessmentDropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.querySelector('.menu').classList.remove('menu-open');
                otherDropdown.querySelector('.svg-img').classList.remove('svg-img-rotate');
            }
        });

        menu.classList.toggle('menu-open');
        svg.classList.toggle('svg-img-rotate');
    });

    options.forEach(option => {
        option.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event propagation to document body
            selected.innerText = option.innerText;
            menu.classList.remove('menu-open');
            svg.classList.remove('svg-img-rotate');

            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

// date

$('.myDatepicker').each(function () {
    var minDate = new Date();
    minDate.setHours(0);
    minDate.setMinutes(0);
    minDate.setSeconds(0, 0);

    var $picker = $(this);
    $picker.datepicker();

    var pickerObject = $picker.data('datepicker');

    $picker.on('changeDate', function (ev) {
        $picker.datepicker('hide');
    });
});

// loader

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})

// scroll to navbar

const scrollRevealOPtion = {
    distance: "50px",
    charAtorigin: "bottom",
    duration: 1000,
};
const scroll = ScrollReveal({
    distance: "100px",
    interval: 2500,
    // reset: true,
});

// header container
ScrollReveal().reveal(".home-content h5", scrollRevealOPtion)

ScrollReveal().reveal(".home-content h1", {
    ...scrollRevealOPtion,
    delay: 500,
});
ScrollReveal().reveal(".home-content p", {
    ...scrollRevealOPtion,
    delay: 1000,
});
ScrollReveal().reveal(".home-content .button", {
    ...scrollRevealOPtion,
    delay: 1500,
});
ScrollReveal().reveal(".service-section .box ", {
    ...scrollRevealOPtion,
    interval: 500,
});

scroll.reveal(".about-section .item .about-img", {
    origin: "left",
    interval: 150,
});
scroll.reveal(".about-section .item .heading, .about-section .item .description, .about-section .item .about-btn", {
    origin: "right",
    interval: 150,
});
scroll.reveal(".appointment-section .item1", {
    origin: "left",
    interval: 150,
});
scroll.reveal(".appointment-section .item2", {
    origin: "right",
    interval: 150,
});