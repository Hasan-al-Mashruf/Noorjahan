$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplaySpeed: 4500,
    autoplayHoverPause: false,
    slideTransition: 'linear',
    padding: 0,
    responsive: {
        0: {
            items: 4
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
