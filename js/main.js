$(document).ready(function () {

    $("#filterToggle").click(function(){
        $(".filters").toggleClass("show");
    });

    $(".tabs").find("div").click(function(){
        $(".tabs").find("div").removeClass("active");
        $(this).addClass("active");
    });

    $(".description-tab").click(function(){
        $(".containers").find("div").removeClass("active");
        $(".description-container").addClass("active");
    });

    $(".characteristics-tab").click(function(){
        $(".containers").find("div").removeClass("active");
        $(".characteristics-container").addClass("active");
    });

    $(".reviews-tab").click(function(){
        $(".containers").find("div").removeClass("active");
        $(".reviews-container").addClass("active");
    });

    $('.big-photos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.small-photos'
    });
    $('.small-photos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.big-photos',
        focusOnSelect: true
    });

    $(".product-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
         ]
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