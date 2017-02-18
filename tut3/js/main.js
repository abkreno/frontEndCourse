$(document).foundation();
$(document).ready(function(){
    var currColor = 'gray';

    $('.btn').click(function() {
        currColor = $(this).attr('id');
    });

    $('.box').click(function() {
        $(this).css({background: currColor})
    });
});
