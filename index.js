///1. ScrollAnimations 
var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
$containers.scrollAnimations();
/* 3. Swiper slider */
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
    swiper.slides[i].querySelector(".slide-bg").style.transform =
     "translate3d(" + innerTranslate + "px, 0, 0)";
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
// //
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