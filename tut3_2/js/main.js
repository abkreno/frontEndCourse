$(document).ready(function() {
    $('#background-slideshow .slide:first').addClass('current');
    $('#next').click(function(){ return rotateImages(backward=false); });
    $('#prev').click(function(){ return rotateImages(backward=true); });
    function rotateImages(backward=true) {

        var oCurrentPhoto = $('#background-slideshow .slide.current');
        var oNextPhoto = backward ? oCurrentPhoto.prev(): oCurrentPhoto.next();

        if (oNextPhoto.length == 0) {
            oNextPhoto = $('#background-slideshow .slide:'+(backward?'last':'first'));
        }

        oCurrentPhoto.removeClass('current');

        oNextPhoto.css({opacity: 0.0}).addClass('current').animate({
            opacity: 1.0
        }, 1000, function() {});
    }

});
