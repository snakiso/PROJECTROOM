///1. ScrollAnimations 
var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
$containers.scrollAnimations();
/* 3. Swiper slider */
var interleaveOffset = 0.5;
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