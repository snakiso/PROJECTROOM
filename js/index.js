///1. ScrollAnimations 
var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
$containers.scrollAnimations();
// button to top// 
let buttonToTop = document.querySelector('.to-top-button')
let sections = document.getElementsByTagName('section')
let check = document.querySelectorAll('.experiencies__item') // высота экрана деленная на 2
let check2 = document.querySelector('.benefits__number')
window.addEventListener('scroll', () => {
  screenHeight = window.innerHeight
 // console.log(check2.getBoundingClientRect().top) 
  if (sections[0].getBoundingClientRect().top < -(screenHeight)){
    buttonToTop.style.visibility ='visible'
  }else{
    buttonToTop.style.visibility = 'hidden'
  }
})
//  // // //
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
// // //
// // //
// // //
var swiper = new Swiper('.we-can__slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  speed: 1400,
  autoplay: {
    delay: 5000
  },
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 1
    }
  }
});
// // // 
// // //
// // //
var swiper = new Swiper('.we__work__slider-mobile', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  speed: 1400,
  freeMode: false,
});

///3.header
let hamburger = document.querySelector('.menu-open')
let hamburgerBlck = document.querySelector('.menu-open-blck')
let nav = document.querySelector('.nav-container')
let closeButton = document.querySelector('.menu-close')
hamburger.addEventListener('click', () => {
  hamburger.classList.add('menu-open-active')
  nav.classList.add('nav-container-active')
})
hamburgerBlck.addEventListener('click', () => {
  hamburgerBlck.classList.add('menu-open-active')
  nav.classList.add('nav-container-active')
})
closeButton.addEventListener('click', () => {
  hamburgerBlck.classList.remove('menu-open-active')
  hamburger.classList.remove('menu-open-active')
  nav.classList.remove('nav-container-active')
})
/* 4. Headroom */
let header = document.querySelector('.fixed-header')
let headroom = new Headroom(header)
headroom.init()

/// /// ///
/// /// ///
/* 7. Progress bar */
$(".skills__progress-zero").each(function () {
  $(this).find(".skills__progress-full").animate({
    width: $(this).attr("data-progress")
  });
});

