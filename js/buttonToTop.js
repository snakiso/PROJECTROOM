// button to top// 
let buttonToTop = document.querySelector('.to-top-button')
let sections = document.getElementsByTagName('section')
let check = document.querySelectorAll('.experiencies__item') // высота экрана деленная на 2
let check2 = document.querySelector('.benefits__number')
window.addEventListener('scroll', () => {
 screenHeight = window.innerHeight
 if (sections[0].getBoundingClientRect().top < -(screenHeight)) {
  buttonToTop.style.visibility = 'visible'
 } else {
  buttonToTop.style.visibility = 'hidden'
 }
})
buttonToTop.addEventListener('click', () => window.scrollTo({
 top: 0,
 behavior: 'smooth'
}))