$(document).ready(function () {

    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('.nav-bar').addClass('shrink');
        } else {
            $('.nav-bar').removeClass('shrink');
        }
    });
    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 95
        }, 1000, 'linear');
    });
    $('body').css('overflowY', 'hidden'); 
    // Load spinner
    $(window).on("load", function () {
            setTimeout(function() {
              $("#loader").fadeOut("slow");
              $('body').css('overflowY', 'auto'); 
         }, 2000);
    });
});