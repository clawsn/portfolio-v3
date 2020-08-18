$(window).scroll(function() {
  if($(document).scrollTop() > 50){
    $('.nav-bar').addClass('shrink');
  } else {
    $('.nav-bar').removeClass('shrink');
  }
});