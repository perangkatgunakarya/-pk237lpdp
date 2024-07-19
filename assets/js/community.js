$("#community").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoWidth: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        },
    },
});