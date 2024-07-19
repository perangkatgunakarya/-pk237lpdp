var hamburger = document.getElementById("hamburger-button");
var navbar = document.getElementById("navbar");

hamburger.addEventListener("click", function () {
    if (navbar.classList.contains("flex")) {
        navbar.classList.remove("flex");
        navbar.classList.add("hidden");
    } else {
        navbar.classList.add("flex");
        navbar.classList.remove("hidden");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navs = document.querySelectorAll(".link-nav");

    navs.forEach((nav) => {
        nav.addEventListener("click", function () {
            // Hapus kelas aktif dari semua link
            navbar.classList.remove("flex");
            navbar.classList.add("hidden");
        });
    });
});

window.addEventListener("scroll", function () {
    var header = document.getElementById("main-header");
    if (window.scrollY > 0) {
        header.classList.remove("absolute");
        header.classList.add("fixed-navbar");
        header.classList.add("shadow-md");
    } else {
        header.classList.remove("fixed-navbar");
        header.classList.add("absolute");
        header.classList.remove("shadow-md");
    }
});