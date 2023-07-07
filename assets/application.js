// Put your application javascript here
$(document).ready(function(){
    $('.top-bar-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
  });

  $('.slider').slick({
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    arrows: false,
  });  