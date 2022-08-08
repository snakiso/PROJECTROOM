
/* 8. Circle progress bar */
let unactiveDetails = document.querySelectorAll('.unactive-details')
let unactiveWork = document.querySelectorAll('.unactive-work')
let unactiveNumber = document.querySelectorAll('.unactive-number')
let section = document.querySelector('.we-work')
let circle = document.querySelector('.we-work__work-circle')
let secondCircle = document.querySelector('.work-circle-progress')
let heightWrap = document.querySelector('.we-work__work').clientHeight //wrapper height = 1205px
let circleProgress = window.getComputedStyle(secondCircle).strokeDashoffset.slice(0, -2)
window.addEventListener('scroll', () => {
 if (section.getBoundingClientRect().top <= 0 && section.getBoundingClientRect().top > -1000) {
  let scrolled = 0 - section.getBoundingClientRect().top
  secondCircle.style.strokeDashoffset = circleProgress - scrolled / 1.912
  circle.style.top = scrolled
 } else if (section.getBoundingClientRect().top <= -1000) {
  circle.style.top = 1005
  secondCircle.style.strokeDashoffset = 0
 }
})
let wrapperMobile = document.querySelector('.swiper-wrapper-for-js')
let secondCircleMobile = document.querySelector('.work-circle-progress-mobile')
let circleProgressMobile = window.getComputedStyle(secondCircleMobile).strokeDashoffset.slice(0, -2)
wrapperMobile.addEventListener('transitionend', () => {
 let scrolled = 0 - window.getComputedStyle(wrapperMobile).transform.slice(19, -4)
 secondCircleMobile.style.strokeDashoffset = circleProgressMobile - (+scrolled / 5.2)
})

//5.2
//// // ///
function removeClass() {
 for (let i = 0; i < unactiveWork.length; i++) {
  unactiveWork[i].classList.remove('active-work')
 }
 for (let j = 0; j < unactiveNumber.length; j++) {
  unactiveNumber[j].classList.remove('active-number')
 }
 for (let i = 0; i < unactiveDetails.length; i++) {
  unactiveDetails[i].classList.remove('active-details')
 } 
}
window.addEventListener('scroll', () => {
 if (section.getBoundingClientRect().top > -100) {
  removeClass()
  unactiveWork[0].classList.add('active-work')
  unactiveNumber[0].classList.add('active-number')
  unactiveDetails[0].classList.add('active-details')
 }
 if (section.getBoundingClientRect().top < -100) {
  removeClass()
  unactiveWork[1].classList.add('active-work')
  unactiveNumber[1].classList.add('active-number')
  unactiveDetails[1].classList.add('active-details')
 }
 if (section.getBoundingClientRect().top < -300) {
  removeClass()
  unactiveWork[2].classList.add('active-work')
  unactiveNumber[2].classList.add('active-number')
  unactiveDetails[2].classList.add('active-details')
 }
 if (section.getBoundingClientRect().top < -500) {
  removeClass()
  unactiveWork[3].classList.add('active-work')
  unactiveNumber[3].classList.add('active-number')
  unactiveDetails[3].classList.add('active-details')
 }
 if (section.getBoundingClientRect().top < -700) {
  removeClass()
  unactiveWork[4].classList.add('active-work')
  unactiveNumber[4].classList.add('active-number')
  unactiveDetails[4].classList.add('active-details')
 }
 if (section.getBoundingClientRect().top < -900) {
  removeClass()
  unactiveWork[5].classList.add('active-work')
  unactiveNumber[5].classList.add('active-number')
  unactiveDetails[5].classList.add('active-details')
 }
})
