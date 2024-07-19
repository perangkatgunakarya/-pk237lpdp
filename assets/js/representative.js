$("#representative").owlCarousel({
    center: true,
    loop: true,
    margin: 150,
    nav: true,
    startPosition: 0,
    touchDrag: false,
    mouseDrag: false,
    navText: [
        "<button><span></span></button>",
        "<button><span></span></button>",
    ],
    responsive: {
        0: {
            items: 1,
        },
        1000: {
            items: 3,
        },
    },
});