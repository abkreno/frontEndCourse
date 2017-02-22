$(document).foundation();
$(document).ready(function() {
    var currSlide = 0;
    var numOfSlides = 4;
  
    $("#next").click(function() {
        $(`#${currSlide}`).animate({
            width: 'toggle'
        }, 350);
        currSlide = (currSlide + 1) % numOfSlides;
    });
});
