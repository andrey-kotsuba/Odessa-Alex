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

    $( "#weight" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#weightMinMax" ).val(ui.values[ 0 ] + "кг" + " - " + ui.values[ 1 ]+ "кг" );
        }
    });
    $( "#weightMinMax" ).val( $( "#weight" ).slider( "values", 0 ) + "кг" +
        " - "  + $( "#weight" ).slider( "values", 1 ) + "кг");

    $( "#amount" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#amountMinMax" ).val(ui.values[ 0 ] + "л" + " - " + ui.values[ 1 ]+ "л" );
        }
    });
    $( "#amountMinMax" ).val( $( "#amount" ).slider( "values", 0 ) + "л" +
        " - "  + $( "#amount" ).slider( "values", 1 ) + "л");
});