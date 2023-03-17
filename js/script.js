$(document).ready(function(){
  //counter-1
  $('.counter').counterUp({
    delay: 10,
    time: 2000
});
  //counter-2
  $("#num1").countMe(40,65);
  $("#num2").countMe(30, 30);
  $("#num3").countMe(40, 50);
  $("#num4").countMe(100,200);

  //counter-3
  $('textarea').characterCountdown();

  //type js
  var typed = new Typed('#element', {
    strings: ["<i>javascript and</i>","jquery animation example"],
    typeSpeed: 80,
  });
  //slick slider
  $('.slick_slide').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  //lightbox
  $('#gallery').lbtLightBox({
    qtd_pagination: 6,
    pagination_width: "160px",
    pagination_height: "160px",
    custom_children: ".boximg img",
    captions: true,
    captions_selector: ".caption p",
  });
  //AOS
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  //perallax
  jQuery(window).trigger('resize').trigger('scroll');

});
