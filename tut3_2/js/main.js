$(document).foundation();
$(document).ready(function() {
    $("#background-slideshow .slide:first").addClass("current");
    function rotateImages(backward=true) {
        var oCurrentPhoto = $("#background-slideshow .slide.current");
        var oNextPhoto = backward ? oCurrentPhoto.prev(): oCurrentPhoto.next();
        if (oNextPhoto.length == 0) {
            oNextPhoto = $("#background-slideshow .slide:"+(backward?"last":"first"));
        }

        oCurrentPhoto.removeClass("current").addClass("previous");

        oNextPhoto.css({opacity: 0.0}).addClass("current").animate({
            opacity: 1.0
        }, 500, function() {
            oCurrentPhoto.removeClass("previous");
        });
    }

});
