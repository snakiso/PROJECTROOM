let hamburgerBlck = document.querySelector('.menu-open-blck')
let nav = document.querySelector('.nav-container')
let closeButton = document.querySelector('.menu-close')
closeButton.addEventListener('click', () => {
 hamburgerBlck.classList.remove('menu-open-active')
})
hamburgerBlck.addEventListener('click', () => {
 hamburgerBlck.classList.add('menu-open-active')
 nav.classList.add('nav-container-active')
})