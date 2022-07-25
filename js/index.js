///1. ScrollAnimations 
var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
$containers.scrollAnimations();
///2. Swiper slider */
var interleaveOffset = 0.5;
// //
var mySwiper = new Swiper('.home-slider', {
  spaceBetween: 0,
  speed: 1500,
  autoplay: {
    delay: 5000
  },
  autoHeight: true,
  watchSlidesProgress: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    progress: function () {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var innerOffset = swiper.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;
        if (swiper.width > 768) {
          swiper.slides[i].querySelector(".slide-bg").style.transform =
            "translate3d(" + innerTranslate + "px, 0, 0)";
        } else {
          swiper.slides[i].querySelector(".slide-bg").style.transform =
            "translate3d(" - innerTranslate * 2 + "px, 0, 0)";
        }
      }
    },
    touchStart: function () {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function (speed) {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-bg").style.transition =
          speed + "ms";
      }
    }
  }
});
// // //
// // //
var swiper = new Swiper('.testimonials-slider', {
  speed: 1200,
  autoplay: {
    delay: 5000
  },
  spaceBetween: 30,
  loop: true,
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
// // // 
// // // 
// // //
var swiper = new Swiper('.we-do__slider', {
  speed: 1200,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: ".we-do__scroll-right",
    prevEl: ".we-do__scroll-left"
  },
  spaceBetween: 30,
  loop: true,
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

///3.header
let hamburger = document.querySelector('.menu-open')
let nav = document.querySelector('.nav-container')
let closeButton = document.querySelector('.menu-close')
hamburger.addEventListener('click', () => {
  hamburger.classList.add('menu-open-active')
  nav.classList.add('nav-container-active')
})
closeButton.addEventListener('click', () => {
  hamburger.classList.remove('menu-open-active')
  nav.classList.remove('nav-container-active')
})
/* 4. Headroom */
let header = document.querySelector('.fixed-header')
let headroom = new Headroom(header)
headroom.init()

/// /// ///
/// /// ///
/* 5. number animation (spincrement) */
$(document).ready(function () {
  var show = true;
  var countbox = ".benefits__number";
  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      $('.benefits__number').css('opacity', '1');
      $('.benefits__number').spincrement({
        thousandSeparator: "",
        duration: 4000
      });
      show = false;
    }
  });
});
// // //
// // //
/* 6. Progress bar */
$(".skills__progress-zero").each(function () {
  $(this).find(".skills__progress-full").animate({
    width: $(this).attr("data-progress")
  });
});