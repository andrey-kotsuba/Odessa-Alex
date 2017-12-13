$(document).ready(function () {
    $(".product-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
});