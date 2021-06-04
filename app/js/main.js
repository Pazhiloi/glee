$(function () {

$('.related__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
 prevArrow:'<button class="slick-prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="9px"><path fill-rule="evenodd" fill="rgb(163, 187, 200)" d="M21.704,3.526 L21.712,3.529 L4.756,3.529 L4.856,0.670 C4.910,0.616 4.940,0.542 4.940,0.465 C4.940,0.388 4.910,0.315 4.856,0.261 L4.684,0.087 C4.629,0.033 4.557,0.003 4.480,0.003 C4.403,0.003 4.331,0.033 4.276,0.087 L0.084,4.298 C0.030,4.353 -0.000,4.426 -0.000,4.503 C-0.000,4.580 0.030,4.653 0.084,4.707 L4.276,8.920 C4.331,8.973 4.403,9.003 4.480,9.003 C4.557,9.003 4.629,8.973 4.684,8.920 L4.856,8.746 C4.910,8.692 4.940,8.619 4.940,8.542 C4.940,8.465 4.910,8.396 4.856,8.342 L4.743,5.478 L21.708,5.478 C21.867,5.478 22.000,5.340 22.000,5.181 L22.000,3.812 C22.000,3.653 21.863,3.526 21.704,3.526 Z" /></svg></button>',
nextArrow:'<button class="slick-next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="9px"><path fill-rule="evenodd" fill="rgb(163, 187, 200)" d="M0.296,5.473 L0.288,5.471 L17.244,5.471 L17.144,8.329 C17.089,8.384 17.060,8.458 17.060,8.534 C17.060,8.612 17.089,8.684 17.144,8.739 L17.316,8.912 C17.371,8.967 17.443,8.996 17.520,8.996 C17.597,8.996 17.669,8.967 17.724,8.913 L21.916,4.701 C21.970,4.647 22.000,4.573 22.000,4.497 C22.000,4.420 21.970,4.347 21.916,4.293 L17.724,0.080 C17.669,0.026 17.597,-0.003 17.520,-0.003 C17.443,-0.003 17.371,0.026 17.316,0.080 L17.144,0.254 C17.089,0.307 17.060,0.380 17.060,0.458 C17.060,0.535 17.089,0.604 17.144,0.657 L17.257,3.522 L0.292,3.522 C0.133,3.522 -0.000,3.659 -0.000,3.818 L-0.000,5.188 C-0.000,5.347 0.137,5.473 0.296,5.473 Z" /></svg></button>',
  infinite: false,
});

$('.product-tabs__item').on('click', function (e) {
  
   e.preventDefault();
   $('.product-tabs__item').removeClass('product-tabs__item--active');
   $(this).addClass('product-tabs__item--active');

   $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
   $($(this).attr('href')).addClass('product-tabs__content-item--active');

});


 $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
    responsive:[
      {
      breakpoint: 1051,
      settings: {
        draggable: true,
      }
    },
    ]
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });


$('.select-style, .product-details__input').styler();

  $('.product-page__btn').on('click', function () {
    $('.product-page__btn').removeClass('product-page__btn')
    $(this).addClass('product-page__btn--disabled');
  });

  $('.product-page__btn').on('click', function () {
    $('.product-page__carts').removeClass('product-page__carts--disabled')
  });

  $('.product-page__cart').on('click', function () {
    $('.product-page__cart').addClass('product-page__cart--active')
  });

  $('.product-page__heart').on('click', function () {
    $('.product-page__heart').addClass('product-page__heart--active')
  });

  $(".star").rateYo({
    starWidth: "15px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    spacing: "8px",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11pt" height="9pt" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>'
  });

  $(".product-page__star").rateYo({
    starWidth: "20px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    spacing: "12px",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10pt" height="10pt" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>'
  });

$('.filter-price__input') .ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
        },
  });


$('.contact__item').on('click', function () {
    $('.contact__item').removeClass('contact__item--active')
    $(this).addClass('contact__item--active');
  });



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