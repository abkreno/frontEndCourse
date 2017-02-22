$(document).foundation();
$(document).ready(function() {
    var animateInterval;
    function rotateImages(backward=true) {
        var oCurrentPhoto = $("#background-slideshow img.current");
        var oNextPhoto = backward ? oCurrentPhoto.prev(): oCurrentPhoto.next();
        if (oNextPhoto.length == 0) {
            oNextPhoto = $("#background-slideshow img:"+(backward?"last":"first"));
        }

        oCurrentPhoto.removeClass("current").addClass("previous");

        oNextPhoto.css({opacity: 0.0}).addClass("current").animate({
            opacity: 1.0
        }, 500, function() {
            oCurrentPhoto.removeClass("previous");
        });
    }
    animateInterval = setInterval(rotateImages, 1000);

});
