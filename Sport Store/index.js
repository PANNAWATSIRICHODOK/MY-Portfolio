$(".menu-icon").on("click", function() {
    $(".navbar ul li").slideToggle();
    var originalMargin = "0px";
    var currentMargin = $(".header .row").css("margin-top");

    if (currentMargin === "150px") {
        $(".header .row").animate({
            marginTop: originalMargin
        });
    } else {
        $(".header .row").animate({
            marginTop: '+150px'
        });
    }
});
