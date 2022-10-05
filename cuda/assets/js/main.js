$(document).ready(function(){
  // use TypeIt plugin
  new TypeIt('#typeit',{
    strings: ['Hi there! We are the new kids on the block and we build awesome websites and mobile apps.'],
  }).go();

  // active wow-js plugin
  new WOW().init();

  // use owl-carousel
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 80,
    dots: false,
    loop: true,
    responsive: {
      0 : {
        items: 1,
      },
      575: {
        items: 2
      },
      767: {
        items: 3
      },
      991: {
        items: 4
      }
    }
  });


});