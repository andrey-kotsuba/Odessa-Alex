$(document).ready(function () {

    $(".navigation").find(".navigation_container").mousemove(function () {
        $(".column").removeClass("column-hover");
        $(".column").addClass("column-not-hover");
        $(".column:hover").removeClass("column-not-hover");
        $(".column:hover").addClass("column-hover");
    });

    $(".navigation").find(".navigation_container").mouseleave(function () {
        $(".column").removeClass("column-hover");
        $(".column").removeClass("column-not-hover");
    });
});