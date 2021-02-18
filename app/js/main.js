$(function () {
  
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 200
  });




    var mixer = mixitup('.product__items', {
     selectors: {
       control: '.product__btn'
     }
   });
    var mixer1 = mixitup('.design__items', {
     selectors: {
       control: '.design__btn'
     }
   });

});