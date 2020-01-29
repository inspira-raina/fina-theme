$(document).ready(function() {
  var $backToTop = $(".btn-up");
  $backToTop.hide();
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $backToTop.fadeIn();
    } else {
      $backToTop.fadeOut();
    }
  });

  $backToTop.on('click', function(e) {
    $("html, body").animate({scrollTop: 0}, 500);
  });

  var $triggerSlide = $('.trigger-button > .button-search');
  var $closeSlider = $('.slider-header > .button-close');
  $triggerSlide.on('click',function() {
    $('.slider-container').slideToggle('active');
    $('.trigger-button').toggleClass('hide');
  });

  $closeSlider.on('click', function() {
    $('.slider-container').slideToggle();
    $('.trigger-button').toggleClass('hide');
  })
});