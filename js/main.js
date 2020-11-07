
$(function () {
   $('.menu__burger').on('click',function () {
      $('.menu__list').toggleClass('menu__list--active');
   }
   );

   $('.heroes__slider-img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.heroes__slider-text',
      prevArrow: '<button class="slick-btn slick-prev"><img src="img/icons/arrow-left.png" alt="prev"></button>',
      nextArrow: '<button class="slick-btn slick-next"><img src="img/icons/arrow-right.png" alt="next"></button>',
      // responsive: [
      //    {
      //       breakpoint: 769,
      //       settings: {
      //          arrows: false
      //       }
      //    }
      // ] -  выклает стрелки на ширыне екрана(769px). Тут (в js файле) приоретет к css, по етому там не откучаються.
   });
   $('.heroes__slider-text').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.heroes__slider-img',
      fade: true,
      arrows: false
   });

});

